export interface LogInPayload {
  email: string;
  password: string;
}
export interface LogInResponse {
  data: LogInProps;
}
export interface LogInProps {
  token: string;
}
