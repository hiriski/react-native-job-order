import * as Actions from './constants';
import { Todo } from '../../interfaces/todo';

/**
 * ---------  Actions Definition ---------
 */
interface SetName {
  type: typeof Actions.SAMPLE_SET_NAME;
  payload: string;
}
interface FetchTodosLoading {
  type: typeof Actions.FETCH_TODOS_LOADING;
}
interface FetchTodosFailure {
  type: typeof Actions.FETCH_TODOS_FAILURE;
}
interface FetchTodosSuccess {
  type: typeof Actions.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

/**
 * --------- Union Actions Type ---------
 */
export type SampleAction = SetName | FetchTodosLoading | FetchTodosFailure | FetchTodosSuccess;

/**
 * --------- Actions Creators ---------
 */
export const setName = (payload: string): SetName => ({
  type: Actions.SAMPLE_SET_NAME,
  payload,
});

// fetch todos
export const fetchTodos = (payload?: Record<string, string | number>) => ({
  type: Actions.FETCH_TODOS_REQUESTED,
  payload,
});
export const fetchTodosLoading = (): FetchTodosLoading => ({
  type: Actions.FETCH_TODOS_LOADING,
});
export const fetchTodosFailure = (): FetchTodosFailure => ({
  type: Actions.FETCH_TODOS_FAILURE,
});
export const fetchTodosSuccess = (payload: Todo[]): FetchTodosSuccess => ({
  type: Actions.FETCH_TODOS_SUCCESS,
  payload,
});
