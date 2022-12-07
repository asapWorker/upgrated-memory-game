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


// Sber token
export const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZTFmNTQxODM0NzEwNjkyNzAzM2QwYTQ0ODFmMTNkNTJiMTA1N2NhMWNkY2I0OTg0ZGNiMWQxZjQzMzdhMzYyNTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTY3MDQwNDY1NywiaWF0IjoxNjcwMzE4MjQ3LCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiOTc5NjllOGMtZWI4NS00MjJhLWFmNTctN2M1MDg4OGY5NTFkIiwic2lkIjoiMTgzMGRmYTYtOTIzYy00MWExLWJlM2UtNjJhNDgyZTE2MDczIn0.P7czS8i3qqAk3gU9FFbwvMN0-IQg-mHWe5Zq3pUuvwKIaNssxYxKNrMPs6u5UDE3L6oPycKDi-2JB8hHIPqP49WSOvQ790e_vqyfFVsfxYw-f3Kx8JIa9iXzHZwlaTE5ZtCUA6N791Mt8wgRCS4q8yxY0gZumizYKlN0-LuyKfto3R9xTYmrCNomkzvMzFc_In9181pdOi5hX0QCLIF_DRIKdZRU6gmdPjgVCaenMHyErBhQLI4zcoRWDPcey1iawVWbd2mgeDglcqZL6n49eOheq6HKYqwIrPzvMNmc0I4jzqJfy9_mBBbraw-iVGJx1TbDp8Okq2ABO_JeIXcQlgX0lHGWcOW0MAPRAKLUbqrnsBpvE_U4OAWc2REaGyNgHZboZ0Xj2xPyiaDq6NT6Zh8q44bI8cs5U47eoV4cSiCC3-YTmqTjwYbWdvV-sWQK0ZPI3GY1t5t-MZp4P7dptT15byroa_bJqSX86stCLGx2k8lqJ9WQcjMDhB1OGbWCjCVhHTHgHm6vWLJnxJeC1d6gDNc8HVu9mbUwz7YqYmtkitmWXoPs-BC7bSNscG9bVTUS7IqfRfQzDZnN9q0RJ3OdfffxyIbM0TNCPEwsAC1NLoqkwlR4DujSDCekQbM9R8cr7RkQwD6sUNUcfIB3s9mGSb5FeChRWJBUCF396M4';

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