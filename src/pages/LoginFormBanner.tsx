import LoginForm from '../layout/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginFormBanner = () => {
  const navigate = useNavigate();

  const handleLogin = (values: unknown) => {
    console.log('Login values:', values);
    navigate('/home');
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginFormBanner;
