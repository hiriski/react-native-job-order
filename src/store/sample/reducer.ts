import * as Actions from './constants';
import { Todo } from '../../interfaces/todo';
import { SampleAction } from './actions';

export interface SampleState {
  listTodo: {
    isLoading: boolean;
    isError: boolean;
    todos: Todo[];
  };
  name: string;
}

const initialState: Required<SampleState> = {
  listTodo: {
    isLoading: false,
    isError: false,
    todos: [],
  },
  name: '',
};

export const sampleReducer = (state: SampleState = initialState, action: SampleAction): SampleState => {
  switch (action.type) {
    /** Set name */
    case Actions.SAMPLE_SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    /** Fetch todo */
    case Actions.FETCH_TODOS_LOADING:
      return {
        ...state,
        listTodo: {
          ...state.listTodo,
          isLoading: true,
          isError: false,
        },
      };
    case Actions.FETCH_TODOS_FAILURE:
      return {
        ...state,
        listTodo: {
          ...state.listTodo,
          isLoading: false,
          isError: true,
        },
      };
    case Actions.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        listTodo: {
          isLoading: false,
          isError: false,
          todos: action.payload,
        },
      };
    default:
      return state;
  }
};
