import { SubmitHandler } from "react-hook-form";

export interface SignInProps {
  open: boolean;
  onClose: any;
  onSignIn: () => void;
}

export interface SignInFormProps {
  onSubmit: SubmitHandler<any>;
  open?: boolean;
  onClose?: any;
  onSignIn: () => void;
}

export interface UserSignInFormState {
  email: string;
  password: string;
}
