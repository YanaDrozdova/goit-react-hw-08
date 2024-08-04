import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { logIn } from '../../redux/auth/operations';

import css from './LoginForm.module.css';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.userInfo} />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.userInfo} />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </label>
        <div className={css.buttonContainer}>
          <button className={css.button} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
}
