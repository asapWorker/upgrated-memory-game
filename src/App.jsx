import React, {useEffect, useState} from "react";
import {Menu} from "./components/menu/Menu";
import {Game} from "./components/game/Game";
import {orientationChangeHandler} from "./functions";

import { createAssistant, createSmartappDebugger } from '@salutejs/client';
import {token} from "./constants";

const initialize = (getState) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('dev')
    return createSmartappDebugger({
      // Токен из Кабинета разработчика
      token,
      // Пример фразы для запуска смартапа
      initPhrase: 'Хочу попкорн',
      // Текущее состояние смартапа
      getState
    });
  }

  // Только для среды production
  return createAssistant({ getState });
}

function App() {
  const [isMenuScreen, setIsMenuScreen] = useState(true);

  useEffect(() => {
    const assistant = initialize(() => 'init');

    assistant.on('start', (command) => {
      console.log(command);
    })

    assistant.on('data', (command) => {
      // Подписка на команды ассистента, в т.ч. команда инициализации смартапа.
      // Ниже представлен пример обработки голосовых команд "ниже"/"выше"
      console.log(command);
    });
  }, [])

  useEffect(() => {
    // add screen orientation change event listener
    orientationChangeHandler();
  }, [])

  if (isMenuScreen) {
    return <Menu changeAppScreen={changeAppScreen}/>
  } else {
    return <Game changeAppScreen={changeAppScreen}/>
  }

  function changeAppScreen() {
    setIsMenuScreen((isMenuScreen) => !isMenuScreen);
  }
}

export default App
