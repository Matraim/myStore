import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  city: Yup.string().required('City is required'),
  gmail: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age must be a positive number'),
});

interface LoginFormProps {
  type: 'signin' | 'signup';
  onSubmit: (data: unknown) => Promise<void>;
}

const StyledForm = styled('form')({
  width: '100%',
  marginTop: '2rem',
});

const StyledBox = styled(Box)({
  backgroundColor: '#f8f8f8',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
});

const StyledLabel = styled('label')({
  marginBottom: '1rem',
  display: 'block',
  color: '#050505',
  fontSize: '1.2rem',
});

const StyledInput = styled(TextField)({
  width: '100%',
  marginBottom: '1rem',
});

const StyledButton = styled(Button)({
  width: '100%',
  padding: '1.5rem',
  marginTop: '1rem',
  backgroundColor: '#0070c9',
  color: 'white',
  borderRadius: '12px',
  cursor: 'pointer',
  fontSize: '1.2rem',
});

const ErrorMessage = styled('p')({
  color: 'red',
  marginTop: '1rem',
  fontSize: '1rem',
});

const ToggleLink = styled(Link)({
  display: 'block',
  marginTop: '1rem',
  textAlign: 'center',
  color: '#0070c9',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '1rem',
});

const LoginForm: React.FC<LoginFormProps> = ({ type, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      city: '',
      gmail: '',
      age: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await onSubmit(values);
        toast.success(
          `${type === 'signin' ? 'Sign In' : 'Sign Up'} successful!`
        );
      } catch (error) {
        console.error(
          `Error during ${type === 'signin' ? 'Sign In' : 'Sign Up'}:`,
          error
        );
        toast.error(
          `Failed to ${
            type === 'signin' ? 'Sign In' : 'Sign Up'
          }. Please try again.`
        );
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledBox>
          <Typography
            component="h1"
            variant="h5"
            style={{
              marginBottom: '1rem',
              color: '#0070c9',
              fontSize: '1.5rem',
            }}
          >
            {type === 'signin' ? 'Sign In' : 'Sign Up'}
          </Typography>
          <StyledLabel>
            Username
            <StyledInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </StyledLabel>
          {formik.touched.username && formik.errors.username ? (
            <ErrorMessage>{formik.errors.username}</ErrorMessage>
          ) : null}
          <StyledLabel>
            Password
            <StyledInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </StyledLabel>
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <StyledLabel>
            City
            <StyledInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </StyledLabel>
          {formik.touched.city && formik.errors.city ? (
            <ErrorMessage>{formik.errors.city}</ErrorMessage>
          ) : null}
          <StyledLabel>
            Gmail
            <StyledInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="gmail"
              label="Gmail"
              name="gmail"
              autoComplete="gmail"
              value={formik.values.gmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </StyledLabel>
          {formik.touched.gmail && formik.errors.gmail ? (
            <ErrorMessage>{formik.errors.gmail}</ErrorMessage>
          ) : null}
          <StyledLabel>
            Age
            <StyledInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </StyledLabel>
          {formik.touched.age && formik.errors.age ? (
            <ErrorMessage>{formik.errors.age}</ErrorMessage>
          ) : null}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <StyledButton type="submit">
            {type === 'signin' ? 'Sign In' : 'Sign Up'}
          </StyledButton>
          {type === 'signin' ? (
            <ToggleLink to="/SignUpPage">
              Don't have an account? Sign Up
            </ToggleLink>
          ) : (
            <ToggleLink to="/SignInPage">
              Already have an account? Sign In
            </ToggleLink>
          )}
        </StyledBox>
      </StyledForm>
      <ToastContainer />
    </Container>
  );
};

export default LoginForm;
