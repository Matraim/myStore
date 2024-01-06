// LoginForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface LoginFormProps {
  type: 'signin' | 'signup';
  onSubmit: (username: string, password: string) => void;
}

const StyledForm = styled.form`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const LoginForm: React.FC<LoginFormProps> = ({ type, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }
    onSubmit(username, password);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Username:
        <StyledInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel>
        Password:
        <StyledInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StyledLabel>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledButton type="submit">
        {type === 'signin' ? 'Sign In' : 'Sign Up'}
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
