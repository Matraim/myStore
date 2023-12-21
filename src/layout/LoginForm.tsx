import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  city: string;
  gender: string;
}

const SignUpSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required'),
  city: yup.string().required('Required'),
  gender: yup.string().required('Required'),
});

const StyledSignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  display: flex;
  margin-bottom: 8px;
  font-weight: bold;
`;

const StyledInput = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4267b2;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background-color: #405d9b;
  }
`;

const AuthForm = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const SignUpLink = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: #0c79d2;

  span {
    color: #4267b2;
    cursor: pointer;
  }
`;

const LoginForm: React.FC<{ onSubmit: (values: SignUpFormValues) => void }> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();

  const handleSubmit = async (
    values: SignUpFormValues,
    actions: FormikHelpers<SignUpFormValues>
  ) => {
    console.log('Signing up with:', values);
    onSubmit(values);
    navigate('/store');
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        city: '',
        gender: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      <StyledSignUpForm>
        <>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </>

        <>
          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </>
        <>
          <StyledLabel htmlFor="city">City:</StyledLabel>
          <StyledInput type="text" id="city" name="city" />
          <ErrorMessage name="city" component="div" />
        </>

        <>
          <StyledButton type="submit" onClick={() => navigate('/home')}>
            Sign Up
          </StyledButton>
        </>

        <AuthForm>
          <SignUpLink>
            Already have an account?{' '}
            <span onClick={() => navigate('/login')}>Login</span>
          </SignUpLink>
        </AuthForm>
      </StyledSignUpForm>
    </Formik>
  );
};

export default LoginForm;
