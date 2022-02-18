import { combineReducers } from 'redux';
import { sampleReducer, SampleState } from './sample/reducer';

export interface RootState {
  sample: SampleState;
}

export type AppState = RootState;

export default combineReducers<RootState>({
  sample: sampleReducer,
});
