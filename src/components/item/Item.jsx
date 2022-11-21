import "./Item.css";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  ACTIVITY,
  UNMARKED,
  CORRECT,
  WRONG,
  LOADING,
  PATH,
  READY,
  WRAP, UNWRAPPED, BTN_WRAP, PAUSE, FINISH
} from "../../constants";
import {changeResult, setReady} from "../../store/gameSlice";

export function Item(props) {
  const [itemMark, setItemMark] = useState(UNMARKED);
  const [isWrapped, setIsWrapped] = useState(WRAP);

  const level = useSelector(state => state.game.level);
  const gameStep = useSelector(state => state.game.step);

  const dispatch = useDispatch();

  function itemChoosingHandler() {
    if (props.isRepeated) {
      setItemMark(CORRECT);
    } else {
      setItemMark(WRONG);
    }
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

  useEffect(() => {
    if (gameStep === LOADING) {
      setIsWrapped(WRAP);
    } else if (gameStep === ACTIVITY) {
      setIsWrapped(BTN_WRAP);
    } else if (gameStep === PAUSE) {
      setIsWrapped(UNWRAPPED);
    } else if (gameStep === FINISH) {
      setIsWrapped(UNWRAPPED);
    }
  }, [gameStep])


  return (
    <div className={'item level-' + level + ' ' + itemMark}>
      {(isWrapped === WRAP) && <div className={'img-wrapper'}/>}

      {
        (isWrapped === BTN_WRAP) &&
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
