import React, {useState} from "react";
import {Menu} from "./components/menu/Menu";
import {Game} from "./components/game/Game";

function App() {
  const [isMenuScreen, setIsMenuScreen] = useState(true);

  function changeAppScreen() {
    setIsMenuScreen((isMenuScreen) => !isMenuScreen);
  }

  if (isMenuScreen) {
    return <Menu changeAppScreen={changeAppScreen}/>
  } else {
    return <Game changeAppScreen={changeAppScreen}/>
  }
}

export default App
