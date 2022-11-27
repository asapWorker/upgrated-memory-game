import './Menu.css';
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {startGame} from "../../store/gameSlice";
import {EASY, MIDDLE, HARD} from "../../constants";
import {setRemoteControllerConfig} from "../../functions";

export function Menu(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    // set remote controller actions
    setRemoteControllerConfig();
  }, [])

  function startGameBtnClickHandler(level) {
    dispatch(startGame(level));
    props.changeAppScreen();
  }


  return (
    <div className="menu">
      <button className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(EASY)}>Легкий уровень</button>
      <button className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(MIDDLE)}>Средний уровень</button>
      <button className="btn menu-btn managing-btn" onClick={() => startGameBtnClickHandler(HARD)}>Сложный уровень</button>
    </div>
  )
}