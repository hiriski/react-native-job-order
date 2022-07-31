import ActionsTypes from './enum';
import { ResponseListJo } from '@/interfaces/jo';

// Actions definitions
interface FetchListJoRequest {
  type: typeof ActionsTypes.FETCH_LIST_JO_REQUESTED;
  payload?: Record<string, string | number>;
}
interface FetchListJoLoading {
  type: typeof ActionsTypes.FETCH_LIST_JO_LOADING;
}
interface FetchListJoFailure {
  type: typeof ActionsTypes.FETCH_LIST_JO_FAILURE;
}
interface FetchListJoSuccess {
  type: typeof ActionsTypes.FETCH_LIST_JO_SUCCESS;
  payload: ResponseListJo;
}

interface SetBottomSheetOptionsJo {
  type: typeof ActionsTypes.SET_BOTTOM_SHEET_OPTIONS_JO;
  payload: {
    open: boolean;
    id?: string | null;
  };
}

// Union action type
export type JoAction =
  | FetchListJoRequest
  | FetchListJoLoading
  | FetchListJoFailure
  | FetchListJoSuccess
  | SetBottomSheetOptionsJo;

// Actions creator
export const fetchListJoRequest = (payload?: Record<string, string | number>): FetchListJoRequest => ({
  type: ActionsTypes.FETCH_LIST_JO_REQUESTED,
  payload,
});
export const fetchListJoLoading = (): FetchListJoLoading => ({
  type: ActionsTypes.FETCH_LIST_JO_LOADING,
});
export const fetchListJoFailure = (): FetchListJoFailure => ({
  type: ActionsTypes.FETCH_LIST_JO_FAILURE,
});
export const fetchListJoSuccess = (payload: ResponseListJo) => ({
  type: ActionsTypes.FETCH_LIST_JO_SUCCESS,
  payload,
});

// Bottom sheet options  jo
export const setBottomSheetOptionsJo = (open: boolean, id?: string | null): SetBottomSheetOptionsJo => ({
  type: ActionsTypes.SET_BOTTOM_SHEET_OPTIONS_JO,
  payload: {
    open,
    id,
  },
});
