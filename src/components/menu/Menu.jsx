import './Menu.css';
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startGame} from "../../store/gameSlice";
import {assistant, EASY, MIDDLE, HARD, START_GAME} from "../../constants";
import {setRemoteControllerConfig} from "../../functions";
import {changeAssistantData} from "../../store/assistantSlice";

export function Menu(props) {
  const dispatch = useDispatch();

  const assistantData = useSelector(state => state.assistant.data);

  const btnEasy = useRef();
  const btnMiddle = useRef();
  const btnHard = useRef();

  useEffect(() => {
    // set remote controller actions
    setRemoteControllerConfig();
  }, [])

  useEffect(() => {
    if (assistantData.type === START_GAME) {
      console.log('start-game in menu')
      startGameHandler(assistantData.payload);
    }
  }, [assistantData])

  function startGameHandler(level) {
    assistant.ref.sendData({ action: { action_id: START_GAME}});
    btnEasy.current.disabled = btnMiddle.current.disabled = btnHard.current.disabled = true;
    props.changeAppScreen();
    dispatch(startGame(level));
  }

  function startGameBtnClickHandler(level) {
    dispatch(changeAssistantData(START_GAME));
    startGameHandler(level);
  }

  return (
    <div className="menu">
      <button ref={btnEasy} className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(EASY)}>Легкий уровень</button>
      <button ref={btnMiddle} className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(MIDDLE)}>Средний уровень</button>
      <button ref={btnHard} className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(HARD)}>Сложный уровень</button>
    </div>
  )
}