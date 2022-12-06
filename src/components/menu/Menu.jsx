import './Menu.css';
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startGame} from "../../store/gameSlice";
import {assistant, EASY, MIDDLE, HARD, START_GAME} from "../../constants";
import {setRemoteControllerConfig} from "../../functions";

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
      startGameHandler(assistantData.payload);
    }
  }, [assistantData])

  function startGameHandler(level) {
    assistant.ref.sendData({ action: { action_id: START_GAME}});
    btnEasy.current.disabled = btnMiddle.current.disabled = btnHard.current.disabled = true;
    props.changeAppScreen();
    dispatch(startGame(level));
  }


  return (
    <div className="menu">
      <button ref={btnEasy} className="btn menu-btn managing-btn" onClick={() => startGameHandler(EASY)}>Легкий уровень</button>
      <button ref={btnMiddle} className="btn menu-btn managing-btn" onClick={() => startGameHandler(MIDDLE)}>Средний уровень</button>
      <button ref={btnHard} className="btn menu-btn managing-btn" onClick={() => startGameHandler(HARD)}>Сложный уровень</button>
    </div>
  )
}