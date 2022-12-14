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
  COUNTDOWN_END,
  FINISH,
  ACTIVITY,
  LIST_LEN,
  LOADING,
  RESTART_GAME,
  SHOW_MENU,
  FINISH_GAME,
  assistant,
  PERMIT_CHOOSING, DENY_FINISHING, CHOOSE_ITEM, NO_ITEM
} from "../../constants";
import {addLastBtnInEnabledBtnList, getPercentageResult, setRemoteControllerConfig} from "../../functions";
import {changeAssistantData} from "../../store/assistantSlice";

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
  const result = useSelector(state => state.game.result);
  const prevGameStep = useSelector(state => state.game.prevStep);

  const assistantData = useSelector(state => state.assistant.data);

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
    resultBtn.current.disabled = true;

    return () => {
      if (gameTimerId) clearTimeout(gameTimerId);
    }
  }, [gameId])

  useEffect(() => {
    // retrieve next gameStep
    if (gameStep === COUNTDOWN_END) {
      if (prevGameStep === LOADED) {
        dispatch(pause());
      } else {
        dispatch(startActivity());
      }
    } else if (gameStep === READY) {
      resultBtn.current.disabled = false;
    } else if (gameStep === FINISH) {
      resultBtn.current.disabled = true;
    }

    // set remote controller configs for managing
    if (gameStep === ACTIVITY) {
      assistant.ref.sendData({action: {action_id: PERMIT_CHOOSING}})

      setRemoteControllerConfig(true, LIST_LEN[level]);
    } else if (gameStep === READY) {
      addLastBtnInEnabledBtnList();
    } else if (gameStep === LOADING || gameStep === FINISH) {
      setRemoteControllerConfig(true);
    }

  }, [gameStep])


  useEffect(() => {
    if (assistantData.type === RESTART_GAME) {
      restartHandler();
    } else if (assistantData.type === SHOW_MENU) {
      menuHandler();
    } else if (assistantData.type === FINISH_GAME) {
      if (gameStep === READY) {
        resultHandler();
      } else {
        assistant.ref.sendData({action: {action_id: DENY_FINISHING}});
      }
    } else if (assistantData.type === CHOOSE_ITEM) {
      const num = Number(assistantData.payload);
      if (num <= 0 || num > LIST_LEN[level]) assistantData.sendData({action: {action_id: NO_ITEM}});
    }
  }, [assistantData])

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

  function menuHandler() {
    assistant.ref.sendData({ action: { action_id: SHOW_MENU}});
    props.changeAppScreen();
  }

  function restartHandler() {
    assistant.ref.sendData({ action: { action_id: RESTART_GAME}});
    dispatch(restartGame());
  }

  function resultHandler() {
    assistant.ref.sendData({action: {action_id: FINISH_GAME, payload: getPercentageResult(result, level)}});
    dispatch(finishGame());
  }

  function menuBtnClickHandler() {
    dispatch(changeAssistantData(SHOW_MENU));
    menuHandler();
  }

  function restartBtnClickHandler() {
    dispatch(changeAssistantData(RESTART_GAME));
    restartHandler();
  }

  function resultBtnClickHandler() {
    dispatch(changeAssistantData(FINISH_GAME));
    resultHandler();
  }
}