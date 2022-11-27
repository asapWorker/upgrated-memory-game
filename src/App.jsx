import React, {useEffect, useState} from "react";
import {Menu} from "./components/menu/Menu";
import {Game} from "./components/game/Game";
import {orientationChangeHandler} from "./functions";

/*import { createAssistant, createSmartappDebugger } from '@salutejs/client';

const initialize = (getState) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('dev')
    return createSmartappDebugger({
      // Токен из Кабинета разработчика
      token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZTFmNTQxODM0NzEwNjkyNzAzM2QwYTQ0ODFmMTNkNTJiMTA1N2NhMWNkY2I0OTg0ZGNiMWQxZjQzMzdhMzYyNTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTY2OTM3NjA2MCwiaWF0IjoxNjY5Mjg5NjUwLCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiNmRjYzA1YTItMTNiOS00ZmYyLWFhZWYtOGRiYWMzNjI4YzhlIiwic2lkIjoiZjJjNzNlNDUtZDg4Yi00ZDRiLTg0NjMtNDMyZGU2ODBjNTVlIn0.FhD_PpofnbmEZd7XEdX9R1RoUZRDiJql8APhBwJv_TrhFs1phlrO_A5WEbkMB3hz7RopmzKqvnWM0Tq37IoVXNHkdjv_rDhwa_MxvLjT3Vjc1b1k484VNX1BQS1k6YXGfU_Pn505zbWUt1LumUhzj5hVpVDGIGJoTh2MDu7QPJoPPEuf5gJIaTDs08xE_xsscO_DVAk5LOT-njbBPmHR9dnd1g6rgSvAQC4kI8mu2UEh5UAvd9_bV81horwB2i0hRkTxZYXppOkob8P1TRYEqruTgyya4MuisbStGMUfHrO7JShoPv-LDI9mXzrk6Z_QM12aCxGqsMvQTGz6QtE365Ztbx5xj3HYw4MnmqxxjWYd9KQlZ2jy6j-YNSVPH26aHYuNcqvhzDWoVPvFcAJdVXyjSrO4mqSm-hbsDuYEC5nQ4cjn5oXyVdvZ6ASRJSunkVOlC63tQmtAEzTVxn8VTPnNwqd1FRah3bjf3HR42HHMWxe_jmtXgYpRid_C99iBgmv1fZ5ry7c756129dVjfCK5Vxa59Lmo2KN_TRH6HojGt6e072oCiyVhqmiXK514Vzp4msfh5ZNKWkrTVnS87mebQVZtQ4icaIM5ci5dmOHCD0AVJyjLda1PtnSvjNTBS8ClZB-F4LT_awz_E9H2nyomrd9kL02D9Rq6xpr07fs',
      // Пример фразы для запуска смартапа
      initPhrase: 'Хочу попкорн',
      // Текущее состояние смартапа
      getState
    });
  }

  // Только для среды production
  return createAssistant({ getState });
}*/

function App() {
  const [isMenuScreen, setIsMenuScreen] = useState(true);

  /*useEffect(() => {
    const assistant = initialize(() => 'init');

    assistant.on('start', (command) => {
      console.log(command);
    })

    assistant.on('data', (command) => {
      // Подписка на команды ассистента, в т.ч. команда инициализации смартапа.
      // Ниже представлен пример обработки голосовых команд "ниже"/"выше"
      console.log(command);
    });
  }, [])*/

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
