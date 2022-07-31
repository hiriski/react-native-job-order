import { AppState } from '@/store/root-reducer';

export const getRootUserState = (state: AppState) => state.user;
export const getLastFetchedListUser = (state: AppState) => state.user.listUser.lastFetched;
