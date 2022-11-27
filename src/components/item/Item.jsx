import "./Item.css";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  ACTIVITY,
  UNMARKED,
  CORRECT,
  WRONG,
  LOADING,
  PATH,
  READY
} from "../../constants";
import {changeResult, setReady} from "../../store/gameSlice";
import {checkBoardBtn} from "../../functions";

export function Item(props) {
  const [itemMark, setItemMark] = useState(UNMARKED);

  const level = useSelector(state => state.game.level);
  const gameStep = useSelector(state => state.game.step);

  const dispatch = useDispatch();

  function itemChoosingHandler() {
    if (props.isRepeated) {
      setItemMark(CORRECT);
    } else {
      setItemMark(WRONG);
    }

    checkBoardBtn(props.imgInd - 1);
  }

  useEffect(() => {
    setItemMark(UNMARKED);
  }, [props])

  useEffect(() => {
    if (itemMark !== UNMARKED) {
      dispatch(changeResult(itemMark));
      if (gameStep === ACTIVITY) {
        dispatch((setReady()));
      }
    }
  }, [itemMark])

  return (
    <div className={'item level-' + level + ' ' + itemMark}>
      {(gameStep === LOADING) && <div className={'img-wrapper'}/>}

      {
        (gameStep === ACTIVITY || gameStep === READY) &&
        <button
          disabled={(itemMark !== UNMARKED)}
          className={'btn img-btn'}
          onClick={itemChoosingHandler}
        >
          {props.imgInd}
        </button>
      }

      {(!props.imgName) ? null : <object
        tabIndex={-1}
        type="image/svg+xml"
        data={PATH + props.imgName + ".svg"}
        className="img"
        onLoad={props.imageIsLoaded}
      >
        smile svg image
      </object>}

    </div>
  )
}
