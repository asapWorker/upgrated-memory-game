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
  READY, LOADED, COUNTDOWN, CHOOSE_ITEM, assistant, NO_ITEM, FINISH
} from "../../constants";
import {changeResult, setReady} from "../../store/gameSlice";
import {checkBoardBtn} from "../../functions";

export function Item(props) {
  const [itemMark, setItemMark] = useState(UNMARKED);

  const level = useSelector(state => state.game.level);
  const gameStep = useSelector(state => state.game.step);
  const prevGameStep = useSelector(state => state.game.prevStep);

  const assistantData = useSelector(state => state.assistant.data);

  const dispatch = useDispatch();

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
    if (assistantData.type === CHOOSE_ITEM) {
      const num = Number(assistantData.payload);
      if (num === props.imgInd) {
        if (itemMark === UNMARKED) {
          itemChoosingHandler();
        }
        else {
          assistant.ref.sendData({action: {action_id: NO_ITEM}});
        }
      }
    }
  }, [assistantData])

  return (
    <div className={'item level-' + level + ' ' + itemMark}>
      {(gameStep === LOADING || gameStep === LOADED || (gameStep === COUNTDOWN && prevGameStep === LOADED)) && <div className={'img-wrapper'}/>}

      {(gameStep === FINISH && itemMark !== UNMARKED) && <div className={'img-wrapper finish-step ' + itemMark}/>}

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

  function itemChoosingHandler() {
    assistant.ref.sendData({action: {action_id: CHOOSE_ITEM}});

    if (props.isRepeated) {
      setItemMark(CORRECT);
    } else {
      setItemMark(WRONG);
    }

    checkBoardBtn(props.imgInd - 1);
  }
}
