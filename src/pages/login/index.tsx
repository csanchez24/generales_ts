import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from './../../components/UI/Input';
import Button from './../../components/UI/Button';
import { Auth, IresponseToken } from '../../store/authentication/types';
import { login } from '../../store/authentication/action';
import { useLoginLazyQuery } from '../../generated/graphql';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [loginQuery] = useLoginLazyQuery({
    onCompleted({ login: loginData }) {
      if (loginData && loginData.token) {
        localStorage.setItem('token', loginData.token);
        const { user } = jwt_decode(loginData.token) as IresponseToken;
        dispatch(login(user));
        navigate('/');
      }
    },
  });

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required').min(4, 'Mininum 4 chars'),
  });
  const initialValues = {
    email: '',
    password: '',
  };
  const SubmitForm = async (auth: Auth) => {
    const { email, password } = auth;
    loginQuery({
      variables: { loginInput: { email: email, password: password } },
    });
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <img
              className="w-auto h-12"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <Formik
                initialValues={initialValues}
                validationSchema={signInSchema}
                onSubmit={SubmitForm}
              >
                {(formik) => {
                  const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty,
                  } = formik;
                  return (
                    <form name="form" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          label="Email"
                          value={values.email}
                          error={errors.email}
                          touched={touched.email}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      </div>
                      <div className="mb-3">
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          label="Password"
                          value={values.password}
                          error={errors.password}
                          touched={touched.password}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      </div>
                      <div>
                        <Button type="submit" color="primary" disabled={!(dirty && isValid)}>
                          Sign in
                        </Button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixqx=xXzZa1n8ty&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
