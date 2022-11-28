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
export const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZTFmNTQxODM0NzEwNjkyNzAzM2QwYTQ0ODFmMTNkNTJiMTA1N2NhMWNkY2I0OTg0ZGNiMWQxZjQzMzdhMzYyNTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTY2OTY2ODI3NywiaWF0IjoxNjY5NTgxODY3LCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiYmE1OGRlNmItNTdmMi00ODA0LThmZjItYjM2ZGExNTFkNGE4Iiwic2lkIjoiYWQxYjdiNTAtY2I0Ni00OTk4LThjYzMtNjhjYzM3OGMwOTE1In0.uZqh67YWGmwTnhXXkQPLBkvHpxnZGgMSIt5Cg8SNcv8iQkSx4mCK5Su2c47X0mgDLzB-gFJZvNT47AAZFoO3-QpQRod4x3Bj9I7A9heTan3hsGx8XZgXiW56wyIGJeS51PP6G50YkIolyv4sDxBjuEyO-6PXsb_hG1fUjHL3fYK2OoNSZ7XLa9aWq104J-vrCGAgjHsqPfycEuVPUPbZNmb7dRxCbU12XIU4-kFVEo10rplHUOFoiJaNeaXM6bXstW9emLydYpN0qRe2nvu4LqPK-p6LztYfCpw4I9Ya9hm7ltVh2XkaWSQqEwODc1X3JHN5qaaRTqJgA9tgL9mjbzE-77I-mkIuZcvvkLF4lqtFBvq9a8Ft1w0SDPOwTopcXmq3Zediuc1wMrWlda9SgEAhGcBx-PzPMHulKUpk6Wye8J18p5i-NHprEfubAKqUmy1t4i6yDBd4--KNtuuI2LNAlMwPqr2Gg86RCwyyMdykL6g9rjMSAt8D9nSceLEMVPITvtxYV6yFgpN8YA11iURM7xCRuBBNz3LN8INVlrWPBAEjvSuHo14PNrWaQxUtxdoJGPyxitX7lbmvtiSz9rgwLSmmVZWkr3dClYfrkg1y60LXXhIn9zs88A3EYsbQAdcYoppJgnNbDkc8M07to6_pN_wsw0gKYq7GUfxYkVQ';