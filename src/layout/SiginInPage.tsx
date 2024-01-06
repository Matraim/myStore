import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
