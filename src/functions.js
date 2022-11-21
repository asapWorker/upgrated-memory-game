import {DEL, EASY, GENERAL, LIST_LEN, MIDDLE} from "./constants";

export const random = function (start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

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