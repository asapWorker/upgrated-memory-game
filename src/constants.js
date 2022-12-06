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

// difference between same images and others depends on level
export const DEL = {
  [EASY]: 5,
  [MIDDLE]: 3,
  [HARD]: 1
}


// screen orientation
export const PORTRAIT = 'portrait-primary';
export const LANDSCAPE = 'landscape-primary';


// Sber token
export const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZTFmNTQxODM0NzEwNjkyNzAzM2QwYTQ0ODFmMTNkNTJiMTA1N2NhMWNkY2I0OTg0ZGNiMWQxZjQzMzdhMzYyNTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTY3MDMxNjMxNCwiaWF0IjoxNjcwMjI5OTA0LCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiNzgyMGNiOWEtYWFiZC00NzAzLWFhZTItNDM5M2Y4ODEwMDNjIiwic2lkIjoiZDQ2NTE0OGQtY2I2Mi00NjA4LWE5MDMtN2YwOTRlNTUyOGI3In0.cZkWBdmkc4nCzoC5TR0B1VF3w37m78N0FnIm2GRqYjTf9XqL4ENMD7VjPy_VG_J5elhC6S5xxSR7xHjVpzHa7JPMZFGQyQBLPgE88DNlSvI7-gMmK_mvnevyUqOyvd01UEyD4CIxV_AXC4uCM9Z9-ZO8q7-YdNMUVqa6DLBtHutjpMFikC337PCSpJdlNGXVAt3H5UZk7L6J8L2EZpNd7jd054hagaM1VZ41UXTNvDaol-MVAR1i8c4iQNKABZXTXBuG8c_GgjWTIdyS5DhxaMR6VHP9_2OrwxEdNt7yQWuvNPaWCvkSD1jBzeV8d-eGCnQhvN2gf23T0xkre5Av1Y6srQehd1D9WgrSzXbn4J2nGlk4WdrGgAlUT71kPNGQqHtMUTGEyZnesaTrGi45Wx5s5JLUd9RuQ_qzA2TK-T-O9VBy4xTqPG9dgGK6r43wYzpc0vMa8l0mtBALxBgdDcRnF-tz68e1b_qFGpC4XJh_QSfxzWFQMgU5wwNmLgvG-n5R8CEZs-wSnSC_az5xHPnV-xVJxYkiIQK1ifd_9f1P4CwAbeMmMkgk6cd--ixtPXHmJCb3d2yd3DiH7OwMRooeEM0u1Z0UZhRjVu3wPEmMostDLg_wikxKIJ9jR_wihLbIbAqFMUZZz-IotjL0V-mkYRD0onJXqnPstfydX6A';

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
export const assistant = {};