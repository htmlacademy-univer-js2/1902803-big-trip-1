export const SortType = {
  DAY: { text: 'day', checked: true },
  TIME: { text: 'time', checked: false },
  PRICE: { text: 'price', checked: false }
};

export const UpdateAction = {
  UPDATE_TASK: 'UPDATE_TASK',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK:'DELETE_TASK',
};

export const UpdateType = {
  PATCH:'PATCH',
  MINOR:'MINOR',
  MAJOR:'MAJOR',
};

export const FilterType ={
  EVERYTHING : 'EVERYTHING',
  FUTURE : 'FUTURE',
  PAST : 'PAST',
};

export const sortPointsByTime = (pointA, pointB) => pointB.waitingTime - pointA.waitingTime;

export const sortPointsByPrice = (pointA, pointB) => pointB.price - pointA.price;

export const sortPointsByDate = (pointA, pointB) => pointB.month - pointA.month;
