import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        {' '}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
          repellendus non vero nesciunt saepe beatae placeat, eius cupiditate
          inventore, accusantium quia accusamus sapiente quis facilis, aperiam
          voluptates doloremque! Repellat, nobis?
        </p>
      </div>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
