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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  display: block;
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
  color: #333;

  span {
    color: #4267b2;
    cursor: pointer;
  }
`;

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    values: SignUpFormValues,
    actions: FormikHelpers<SignUpFormValues>
  ) => {
    console.log('Signing up with:', values);
    navigate('/home');
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
        <div>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <StyledLabel htmlFor="confirmPassword">Confirm Password:</StyledLabel>
          <StyledInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
          <ErrorMessage name="confirmPassword" component="div" />
        </div>

        <div>
          <StyledLabel htmlFor="city">City:</StyledLabel>
          <StyledInput type="text" id="city" name="city" />
          <ErrorMessage name="city" component="div" />
        </div>

        <div>
          <StyledLabel htmlFor="gender">Gender:</StyledLabel>
          <StyledInput as="select" id="gender" name="gender">
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </StyledInput>
          <ErrorMessage name="gender" component="div" />
        </div>

        <div>
          <StyledButton type="submit">Sign Up</StyledButton>
        </div>

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

export default SignUp;
