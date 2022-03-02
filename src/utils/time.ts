import { Moment } from 'moment';

export const getDifferentInMinutes = (date1: Moment, date2: Moment, unitOfMinutes: number): any => {
  return date1.diff(date2, 'minutes');
  // return date1.diff(date2, 'minutes') > unitOfMinutes;
};
