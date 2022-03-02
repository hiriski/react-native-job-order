import moment, { Moment } from 'moment';

export const shouldItBeFetch = (dateLastFetched: Date): boolean => {
  if (!dateLastFetched) return true;

  console.log('dateLastFetched', dateLastFetched);
  const now = moment(new Date());
  return now.diff(dateLastFetched, 'minutes') > 10;
};
