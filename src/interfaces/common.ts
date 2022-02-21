export interface ResponseError {
  status: boolean;
  message?: string | null;
  messages?: string[] | null;
}

export type TRowsPerPage = 10 | 25 | 50;
