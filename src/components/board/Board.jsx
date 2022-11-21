import "./Board.css";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LIST_LEN} from "../../constants";
import {generateList, getDifferentElemsNumOfTwoArrays} from "../../functions";
import {Item} from "../item/Item";
import {finishLoading, setInitResult} from "../../store/gameSlice";

export function Board() {
  const level = useSelector(state => state.game.level);
  const gameId = useSelector(state => state.game.gameId);

  const [itemsList, setItemsList] = useState(new Array(LIST_LEN[level]).fill(null));
  const [unloadedItemsNum, setUnloadedItemsNum] = useState(-1);

  const list = useRef([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const listObj = generateList(level);

    setUnloadedItemsNum(getDifferentElemsNumOfTwoArrays(list.current, listObj.list));
    list.current = listObj.list;

    setItemsList(listObj.list.map((item, index) => {
      return (
        <Item
          key={index}
          imgName={item}
          imgInd={index + 1}
          isRepeated={item === listObj.repeatedItem}
          imageIsLoaded={decreaseUnloadedImagesNum}
        />
      )
    }))

    // initialize game result
    dispatch(setInitResult(LIST_LEN[level] - listObj.repeatedItemNum));

  }, [gameId])

  useEffect(() => {
    if (!unloadedItemsNum) {
      dispatch(finishLoading());
    }
  }, [unloadedItemsNum])


  return (
    <div className={`board level-${level}`}>
      {itemsList}
      </div>
  )

  function decreaseUnloadedImagesNum() {
    setUnloadedItemsNum(prev => prev - 1);
  }
}