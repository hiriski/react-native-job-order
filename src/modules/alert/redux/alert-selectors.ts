// Interfaces.
import { RootState } from '@/store/root-reducer';
import { AlertState } from './alert-reducer';

// Alert state selector.
export const alert_selector = (state: RootState): AlertState => state.alert;
