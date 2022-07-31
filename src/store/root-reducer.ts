import { combineReducers } from 'redux';
import { sampleReducer, SampleState } from '@/store/sample/reducer';
import { commonReducer, CommonState } from '@/store/common/reducer';
import { userReducer, UserState } from '@/store/user/reducer';
import { customerReducer, CustomerState } from '@/store/customer/reducer';
import { joReducer, JoState } from '@/store/job-order/reducer';
import { alertReducer, AlertState } from '@/modules/alert/redux/alert-reducer';
import { authReducer, AuthState } from '@/modules/auth/redux/auth-reducer';

export interface RootState {
  alert: AlertState;
  auth: AuthState;
  sample: SampleState;
  common: CommonState;
  user: UserState;
  customer: CustomerState;
  jo: JoState;
}

// alias
export type AppState = RootState;

export default combineReducers<RootState>({
  alert: alertReducer,
  auth: authReducer,
  sample: sampleReducer,
  common: commonReducer,
  user: userReducer,
  customer: customerReducer,
  jo: joReducer,
});
