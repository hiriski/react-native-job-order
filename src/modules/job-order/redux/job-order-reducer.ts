import ActionTypes from './enum';
import { Jo } from '@/interfaces/jo';
import { LaravelPaginationLinks, LaravelPaginationMeta } from '@/interfaces/laravel-pagination';
import { JoAction } from '@/store/job-order/actions';
import moment from 'moment';

export interface JoState {
  listJo: {
    isLoading: boolean;
    isError: boolean;
    data: Jo[] | null;
    meta?: LaravelPaginationMeta;
    links?: LaravelPaginationLinks;
    lastFetched?: Date | string;
  };
  bottomSheetOptionJo: {
    open: boolean;
    id?: string | null;
  };
}

const initialState = {
  listJo: {
    isLoading: false,
    isError: false,
    data: null,
    meta: undefined,
    links: undefined,
    lastFetched: undefined,
  },
  bottomSheetOptionJo: {
    open: false,
    id: null,
  },
};

export const joReducer = (state: JoState = initialState, action: JoAction): JoState => {
  switch (action.type) {
    case ActionTypes.FETCH_LIST_JO_LOADING:
      return {
        ...state,
        listJo: {
          ...state.listJo,
          isLoading: true,
          isError: false,
        },
      };
    case ActionTypes.FETCH_LIST_JO_FAILURE:
      return {
        ...state,
        listJo: {
          ...state.listJo,
          isLoading: false,
          isError: true,
        },
      };
    case ActionTypes.FETCH_LIST_JO_SUCCESS:
      return {
        ...state,
        listJo: {
          isLoading: false,
          isError: true,
          lastFetched: moment(new Date()).toDate(),

          /**
           * data
           * links
           * meta
           */
          ...action.payload,
        },
      };

    // Bottom sheet options jo
    case ActionTypes.SET_BOTTOM_SHEET_OPTIONS_JO:
      return {
        ...state,
        bottomSheetOptionJo: {
          open: action.payload.open,
          id: action.payload.id,
        },
      };
    default:
      return state;
  }
};
