import './Menu.css';
import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {startGame} from "../../store/gameSlice";
import {EASY, MIDDLE, HARD} from "../../constants";
import {setRemoteControllerConfig} from "../../functions";

export function Menu(props) {
  const dispatch = useDispatch();

  const btnEasy = useRef();
  const btnMiddle = useRef();
  const btnHard = useRef();

  useEffect(() => {
    // set remote controller actions
    setRemoteControllerConfig();
  }, [])

  function startGameBtnClickHandler(level) {
    // disable menu buttons
    btnEasy.current.disabled = btnMiddle.current.disabled = btnHard.current.disabled = true;

    dispatch(startGame(level));
    props.changeAppScreen();
  }


  return (
    <div className="menu">
      <button ref={btnEasy} className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(EASY)}>Легкий уровень</button>
      <button ref={btnMiddle} className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(MIDDLE)}>Средний уровень</button>
      <button ref={btnHard} className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(HARD)}>Сложный уровень</button>
    </div>
  )
}