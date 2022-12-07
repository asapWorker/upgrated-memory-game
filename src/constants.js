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
export const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZTFmNTQxODM0NzEwNjkyNzAzM2QwYTQ0ODFmMTNkNTJiMTA1N2NhMWNkY2I0OTg0ZGNiMWQxZjQzMzdhMzYyNTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTY3MDUxMTM4NCwiaWF0IjoxNjcwNDI0OTc0LCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiNTNkMDA4NzAtMTZhNy00MjQyLTg4MzktNjMyMGQzODA4Yjk0Iiwic2lkIjoiMWYwNjkwNTUtMzNmZi00ZGFmLWE5MWYtZDhlOGZhNmUxOWQ4In0.qRT--TsevE-fm_sfKDWlJgNJ3dY9kMgEqlMRp75i57vKCrBTgQ32_ur99__FofnhurGvggmEJ3qxl4XXXEMD-6HEmXJQW3QKqaOL7LdMhJNw8K9JHmDKnrwENL_OsADgemfJunDELH1Cllh5c9WrBdh9GVSda9NWElhkfooIoWlH-3jRrh7Klo20UR74bDHa4Fm1vyPt_N-bwsRTlPJPNN7DfTkMgpLvpQIfQ44IM7PcEqIscZTr0E_7dU2CznpIKwL6Ra1Ls2aglFhx5yIyv7XRTSyUIfjneZDRLxY3eDHRFeTc9veasN4SVxIxAJuz3nKXOSs8gf2cwvz6pfVqqlPJmhWFMR5r5aX9pUHy4zyHwDCfFABriFZmgY61P8NZ0-v2x8vK68BgxDs_89FaahPABH_bMgTFqtBkLhfXV_xIbD9K5Qd9j7tiDEToKCYkePvfPhHTNsQlHWej4P2K97u3AFNoOeUrVuEVNhUa7AA8eIgy3tnGbczoW1FxftmxD_tn7Hh8GkQqFPCes-yIqrIprlsesJBDI5Nj01BC-5QsWyNP9FoYj1IpW27goUH1VOwnMMZcgIbWzUtHr1eBUN-LL_dgablgzzh8zo2Ei4Lx3uFfedPEwe7UwWypWixFUHMFj3rWEHYkiM3fbWqiB77YOb-V_9cBAhNr4k0Zh9k';

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