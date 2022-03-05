import { combineReducers } from 'redux';
import { sampleReducer, SampleState } from '@store/sample/reducer';
import { authReducer, AuthState } from '@store/auth/reducer';
import { commonReducer, CommonState } from '@store/common/reducer';
import { userReducer, UserState } from '@store/user/reducer';
import { customerReducer, CustomerState } from '@store/customer/reducer';
import { joReducer, JoState } from '@store/job-order/reducer';

export interface RootState {
  sample: SampleState;
  auth: AuthState;
  common: CommonState;
  user: UserState;
  customer: CustomerState;
  jo: JoState;
}

// alias
export type AppState = RootState;

export default combineReducers<RootState>({
  sample: sampleReducer,
  auth: authReducer,
  common: commonReducer,
  user: userReducer,
  customer: customerReducer,
  jo: joReducer,
});
