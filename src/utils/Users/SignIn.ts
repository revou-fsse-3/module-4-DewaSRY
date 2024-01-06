export interface SigningResponse {
  data: SigningProps;
}

export interface SigningProps {
  id: string;
  name: string;
  phone: null | string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}
