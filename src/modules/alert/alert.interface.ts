export type AlertSeverity = 'success' | 'info' | 'warning' | 'error';

export interface IPayloadSetAlert {
  show: boolean;
  messages: string | null;
  severity?: AlertSeverity;
  autoHideDuration?: number;
  variant?: 'filled' | 'outlined';
}
