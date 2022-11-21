import './Menu.css';
import React from "react";
import {useDispatch} from "react-redux";
import {startGame} from "../../store/gameSlice";
import {EASY, MIDDLE, HARD, LIST_LEN} from "../../constants";

export function Menu(props) {
  const dispatch = useDispatch();

  function startGameBtnClickHandler(level) {
    dispatch(startGame(level));
    props.changeAppScreen();
  }

  return (
    <div className="menu">
      <button className="btn menu-btn" onClick={() => startGameBtnClickHandler(EASY)}>Легкий уровень</button>
      <button className="btn menu-btn" onClick={() => startGameBtnClickHandler(MIDDLE)}>Средний уровень</button>
      <button className="btn menu-btn" onClick={() => startGameBtnClickHandler(HARD)}>Сложный уровень</button>
    </div>
  )
}