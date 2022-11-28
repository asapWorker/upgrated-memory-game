import {DEL, EASY, GENERAL, LIST_LEN, MIDDLE, PORTRAIT} from "./constants";

export const random = function (start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}



/* creating items' list
------------------------------------------------------*/
export const generateList = function(level) {
  const listLength = LIST_LEN[level];
  const del = DEL[level];
  const sameNum = generateSameItemsNum(level);
  const repeatedItem = random(1, GENERAL);
  const list = new Array(listLength).fill(null);
  const sameIndexes = randomSeveral(0, listLength - 1, sameNum);

  for (let ind of sameIndexes) {
    list[ind] = repeatedItem;
  }

  let anotherItem = repeatedItem + del;

  for (let i = 0; i < listLength; i++) {
    if (!list[i]) {
      const currentItem = anotherItem % GENERAL;
      list[i] = (currentItem === 0) ? 20 : currentItem;
      anotherItem++;
    }
  }
  return {
    list,
    repeatedItem,
    repeatedItemNum: sameNum
  }
}

const randomSeveral = function (start, end, num) {
  let i = 0;
  const result = new Set();
  while (i < num) {
    const generatedNum = random(start, end);
    if (!result.has(generatedNum)) {
      result.add(generatedNum);
      i++;
    }
  }
  return Array.from(result);
}

// generate same images number
const generateSameItemsNum = function(level) {
  if (level === EASY) {
    return random(3, 5)
  } else if (level === MIDDLE) {
    return random(4, 6)
  } else {
    return random(3, 5)
  }
}

export const getDifferentElemsNumOfTwoArrays = function (arr1, arr2) {
  if (!arr1.length) return arr2.length;
  else if (!arr2.length) return arr1.length;
  else {
    const len = Math.min(arr1.length, arr2.length);
    let notSameElemsNum = Math.max(arr1.length, arr2.length) - len;

    for (let i = 0; i < len; i++) {
      if (arr1[i] !== arr2[i]) notSameElemsNum++;
    }

    return notSameElemsNum;
  }
}


/* managing by remote controller
------------------------------------------------------*/

const remoteControllerDecorator = function() {
  let screenOrientation = window.screen.orientation.type;

  let btnList = [];
  let enabledBtnList = [];
  let currentElem = -1;
  let currentElemAmongEnabled = -1;

  let boardBtnNum = 0;
  let rows = undefined;
  let cols = undefined;


  const orientationChangeHandler = function() {
    window.screen.orientation.onchange = () => {
      const currentScreenOrientation = window.screen.orientation.type;
      if (rows && currentScreenOrientation !== screenOrientation) {
        [rows, cols] = [cols, rows];
      }
    }
  }


  const setRemoteControllerConfig = function(boardItemsNum = 0) {
    btnList = [];
    if (boardItemsNum) {
      [rows, cols] = considerRowsColsCount(boardItemsNum, screenOrientation);

      btnList.push(...document.querySelectorAll('.img-btn'));
    }

    boardBtnNum = boardItemsNum;
    btnList.push(...document.querySelectorAll('.managing-btn'));

    if (currentElem >= 0) {
      currentElem = 0;
      currentElemAmongEnabled = 0;
      btnList[currentElem].focus();
    } else {
      currentElem = -1;
    }

    changeEnabledBtnList();

    document.addEventListener('keydown', moveHandler);
  }

  const changeEnabledBtnList = function() {
    enabledBtnList = [];
    for (let i = 0; i < btnList.length; i++) {
      if (!btnList[i].disabled) enabledBtnList.push(i);
    }
    currentElemAmongEnabled = (currentElem === -1) ? -1 : enabledBtnList.indexOf(currentElem);
  }

  const checkBoardBtn = function(btnInd) {
    if (currentElem === -1) return;

    let btnIndInEnabledList = enabledBtnList.indexOf(btnInd);
    enabledBtnList.splice(btnIndInEnabledList, 1);

    if (enabledBtnList.length === 3) {
      currentElemAmongEnabled = 2;
    } else if (enabledBtnList[btnIndInEnabledList] === boardBtnNum) {
        currentElemAmongEnabled = btnIndInEnabledList - 1;
    } else {
      currentElemAmongEnabled = btnIndInEnabledList;
    }
    currentElem = enabledBtnList[currentElemAmongEnabled];

    btnList[currentElem].focus();
  }

  const moveHandler = function(event) {
    if (currentElem === -1) {
      currentElem = 0;
      currentElemAmongEnabled = 0;
    } else {
      switch (event.code) {
        case 'ArrowDown':
          getNextVerticalElem(1);
          break;
        case 'ArrowUp':
          getNextVerticalElem(-1);
          break;
        case 'ArrowLeft':
          getNextHorizonElem(-1);
          break;
        case 'ArrowRight':
          getNextHorizonElem(1);
          break;
        default:
          break;
      }
    }

    btnList[currentElem].focus();
  }


  const getNextHorizonElem = function(direction) {
    let nextElemAmongEnabled = currentElemAmongEnabled + direction;

    if (nextElemAmongEnabled < 0) {
      return;
    } else if (nextElemAmongEnabled >= enabledBtnList.length) {
      nextElemAmongEnabled = 0;
    }

    currentElemAmongEnabled = nextElemAmongEnabled;
    currentElem = enabledBtnList[currentElemAmongEnabled];
  }

  const getNextVerticalElem = function(direction) {
    if (!boardBtnNum) {
      getNextHorizonElem(direction);
      return;
    } else if (currentElem >= boardBtnNum) {
      getNextHorizonElem(direction);
      return;
    } else if (currentElem > boardBtnNum - cols && currentElem < boardBtnNum && direction === 1) {
      currentElem = boardBtnNum;
      currentElemAmongEnabled = enabledBtnList.indexOf(currentElem);
      return;
    }

    let nextElem = currentElem;

    do {
      nextElem += cols * direction;
    } while ((nextElem >= 0 && nextElem < boardBtnNum) && !enabledBtnList.includes(nextElem))

    if (nextElem >= 0 && nextElem !== currentElem) {
      currentElem = nextElem;
      currentElemAmongEnabled = enabledBtnList.indexOf(currentElem);
    }
  }

  return [setRemoteControllerConfig, changeEnabledBtnList, checkBoardBtn, orientationChangeHandler];
}


const considerRowsColsCount = function (itemsNum, screenOrientation) {
  let cols = 0;
  let rows = 0

  if (itemsNum === LIST_LEN[EASY]) {
    cols = 4;
    rows = 3;
  } else {
    cols = 5;
    rows = 4;
  }

  if (screenOrientation === PORTRAIT) {
    [rows, cols] = [cols, rows];
  }

  return [rows, cols];
}

export const [setRemoteControllerConfig, changeEnabledBtnList, checkBoardBtn, orientationChangeHandler] = remoteControllerDecorator();
