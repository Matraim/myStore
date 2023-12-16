import { FC } from 'react';

interface ILoginForm {
  onSubmit: (values: { email: string; password: string }) => void;
}

const LoginForm: FC<ILoginForm> = () => {
  return <div>LoginForm</div>;
};

export default LoginForm;
