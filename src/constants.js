// Sber token
export const token = '<ваш токен>';

// images folder path
export const PATH = process.env.PUBLIC_URL + "/images/";

// game levels
export const EASY = 'easy';
export const MIDDLE = 'middle';
export const HARD = 'hard';

// game working steps
export const LOADING = 'loading';
export const LOADED = 'loaded';
export const PAUSE = 'pause';
export const PAUSE_END = 'pause_end';
export const COUNTDOWN = 'countdown';
export const COUNTDOWN_END = 'countdown_end';
export const ACTIVITY = 'activity';
export const READY = 'ready';
export const FINISH = 'finish';

// time constants for game steps
export const PAUSE_TIME = 3000;
export const COUNTDOWN_DELAY = 1100;
export const COUNTDOWN_NUM = 3;

// items marked and unmarked statuses
export const UNMARKED = 'unmarked';
export const CORRECT = 'correct';
export const WRONG = 'wrong';

// visibility
export const VISIBLE = 'visible';
export const INVISIBLE = 'invisible';

// possible images count
export const GENERAL = 20;

// length of items list depends on level
export const LIST_LEN = {
  [EASY]: 12,
  [MIDDLE]: 20,
  [HARD]: 20
}

// similar images edges in images list
export const SIMILAR_IMG_START = 1;
export const SIMILAR_IMG_END = 10;

// similar images count
export const SIMILAR_NUM = {
  [EASY]: 0,
  [MIDDLE]: 4,
  [HARD]: 9,
}

// screen orientation
export const PORTRAIT = 'portrait-primary';
export const LANDSCAPE = 'landscape-primary';

// client commands
export const SHOW_MENU = 'show-menu';
export const START_GAME = 'start-game';
export const FINISH_GAME = 'finish-game';
export const RESTART_GAME = 'restart-game';
export const PERMIT_CHOOSING = 'permit-choosing';
export const DENY_FINISHING = 'deny-finishing';
export const CHOOSE_ITEM = 'choose-item';
export const NO_ITEM = 'no-item'


// variable for assistant object
export const assistant = {ref: null};