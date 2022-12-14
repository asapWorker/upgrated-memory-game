import React, {useEffect, useState} from "react";
import {Menu} from "./components/menu/Menu";
import {Game} from "./components/game/Game";
import {orientationChangeHandler} from "./functions";

import { createAssistant, createSmartappDebugger } from '@salutejs/client';
import {assistant, token} from "./constants";
import {useDispatch} from "react-redux";
import {changeAssistantData} from "./store/assistantSlice";

const initializeAssistant = (getState) => {
  // for development
  if (process.env.NODE_ENV === 'development') {
    return createSmartappDebugger({
      token: token,
      initPhrase: 'Запусти тренажер памяти',
      getState,
    });
  }

  // for production
  return createAssistant({ getState });
}

function App() {
  const dispatch = useDispatch();
  const [isMenuScreen, setIsMenuScreen] = useState(true);

  useEffect(() => {
    // add screen orientation change event listener
    orientationChangeHandler();

    // hook up client
    assistant.ref = initializeAssistant(() => 'initialize');

    assistant.ref.on('data', ({action}) => {
      if (action) dispatch(changeAssistantData(action));
    });
  }, [])


  if (isMenuScreen) {
    return <Menu changeAppScreen={changeAppScreen}/>
  } else {
    return <Game changeAppScreen={changeAppScreen}/>
  }

  function changeAppScreen() {
    setIsMenuScreen(state => !state);
  }
}

export default App
