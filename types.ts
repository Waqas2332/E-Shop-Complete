export type authInitialState = {
  isLoading: boolean;
  success: boolean;
  message: string;
  isAuth: boolean;
  statusCode: number;
  error: string;
  user: "";
};

export type registerationData = {
  username: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
};

export type loginData = {
  email: string;
  password: string;
};
