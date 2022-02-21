import { combineReducers } from 'redux';
import { sampleReducer, SampleState } from '@store/sample/reducer';
import { authReducer, AuthState } from '@store/auth/reducer';

export interface RootState {
  sample: SampleState;
  auth: AuthState;
}

// alias
export type AppState = RootState;

export default combineReducers<RootState>({
  sample: sampleReducer,
  auth: authReducer,
});
