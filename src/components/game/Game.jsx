import './Game.css'
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Board} from "../board/Board";
import {
  restartGame,
  finishGame,
  makePause,
  startActivity,
  finishPause
} from "../../store/gameSlice";
import {Wrapper} from "../wrapper/Wrapper";
import {
  PAUSE_TIME,
  READY,
  LOADED,
  COUNTDOWN_END, COUNTDOWN, FINISH, ACTIVITY, LIST_LEN,
} from "../../constants";
import {changeEnabledBtnList, setRemoteControllerConfig} from "../../functions";

// id for setTimeout in game
let gameTimerId = null;

// pause to memorize before countdown
const pause = () => {
  return async (dispatch) => {
    dispatch(makePause());
    gameTimerId = setTimeout(() => {
      dispatch(finishPause());
    }, PAUSE_TIME);
  }
}

export function Game(props) {
  const gameId = useSelector(state => state.game.gameId);
  const gameStep = useSelector(state => state.game.step);
  const level = useSelector(state => state.game.level);

  const prevGameStep = useRef(undefined);

  const dispatch = useDispatch();

  // refs for buttons
  const restartBtn = useRef();
  const menuBtn = useRef();
  const resultBtn = useRef();

  useEffect(() => {
    // stop timeout actions
    return () => {
      if (gameTimerId) clearTimeout(gameTimerId);
    }
  }, [])

  useEffect(() => {
    changeDisabledStatusOfButtons(false);
    resultBtn.current.disabled = true;

    return () => {
      if (gameTimerId) clearTimeout(gameTimerId);
      prevGameStep.current = undefined;
    }
  }, [gameId])

  useEffect(() => {
    // retrieve next gameStep
    if (gameStep === COUNTDOWN_END) {
      if (prevGameStep.current === LOADED) {
        dispatch(pause());
      } else {
        dispatch(startActivity());
      }
    } else if (gameStep === READY) {
      resultBtn.current.disabled = false;
    } else if (gameStep === FINISH) {
      resultBtn.current.disabled = true;
    }

    if (gameStep !== COUNTDOWN) prevGameStep.current = gameStep;

    // set remote controller configs for managing
    if (gameStep === ACTIVITY) {
      setRemoteControllerConfig(LIST_LEN[level]);
    } else if (gameStep === READY) {
      changeEnabledBtnList();
    } else if (gameStep === LOADED || gameStep === FINISH) {
      setRemoteControllerConfig();
    }

    console.log(gameStep);
  }, [gameStep])


  return (
    <div className="game">
      <Wrapper/>
      <Board/>
      <div className="bottom-interface">
        <button ref={restartBtn} className="btn game-btn managing-btn" onClick={restartBtnClickHandler}>Заново</button>
        <button ref={menuBtn} className="btn game-btn managing-btn" onClick={menuBtnClickHandler}>Меню</button>
        <button ref={resultBtn} className="btn game-btn managing-btn" onClick={resultBtnClickHandler}>Готово</button>
      </div>
    </div>
  )

  function menuBtnClickHandler() {
    changeDisabledStatusOfButtons(true);
    props.changeAppScreen();
  }

  function restartBtnClickHandler(event) {
    changeDisabledStatusOfButtons(true);
    dispatch(restartGame());
  }

  function resultBtnClickHandler() {
    dispatch(finishGame());
  }

  function changeDisabledStatusOfButtons(disabled) {
    restartBtn.current.disabled = menuBtn.current.disabled = restartBtn.current.disabled= disabled;
  }
}