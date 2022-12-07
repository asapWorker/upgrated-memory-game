import './Wrapper.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  COUNTDOWN, COUNTDOWN_DELAY,
  COUNTDOWN_END,
  COUNTDOWN_NUM,
  FINISH,
  INVISIBLE,
  LOADED,
  LOADING, PAUSE_END,
  VISIBLE
} from "../../constants";
import {finishCountdown, makeCountdown} from "../../store/gameSlice";
import {getPercentageResult} from "../../functions";

// id for setTimeout
let wrapperTimerId = null;

export function Wrapper() {
  const {level, step: gameStep, result, gameId} = useSelector(state => state.game);
  const dispatch = useDispatch();

  const [countdownStep, setCountdownStep] = useState(-1);

  useEffect(() => {
    return () => {
      if (wrapperTimerId) clearTimeout(wrapperTimerId);
      setCountdownStep(-1);
      console.log('restart');
    }
  }, [gameId])

  useEffect(() => {
    if (gameStep === LOADED || gameStep === PAUSE_END) {
      dispatch(makeCountdown());
      setCountdownStep(COUNTDOWN_NUM);
    }
  }, [gameStep])

  useEffect(() => {
    if (countdownStep > 0) {
      makeTimerTik();
    } else if (countdownStep === 0) {
      dispatch(finishCountdown());
    }
  }, [countdownStep])

  return (
    <div className={'wrapper ' + getVisibilityStatus()}>
      <div className='content'>{generateContent()}</div>
    </div>
  )

  function getVisibilityStatus() {
    if ([LOADING, LOADED, COUNTDOWN, COUNTDOWN_END, FINISH].includes(gameStep)) {
      return VISIBLE;
    } else {
      return INVISIBLE;
    }
  }

  function generateContent() {
    if (gameStep === LOADING || gameStep === LOADED) {
      return <iframe title='spinner' src={process.env.PUBLIC_URL + '/spinner.html'}></iframe>
    } else if (gameStep === COUNTDOWN || gameStep === COUNTDOWN_END) {
      return <span className='countdown'>{(countdownStep === -1) ? 3 : countdownStep}</span>;
    } else if (gameStep === FINISH) {
      return <>
        <span className='result-label'>Результат</span>
        <span className='result'>{`${getPercentageResult(result, level)}%`}</span>
      </>
    } else {
      return null;
    }
  }

  function makeTimerTik() {
    wrapperTimerId = setTimeout(() => {
      setCountdownStep(prev => prev - 1);
    }, COUNTDOWN_DELAY);
  }
}