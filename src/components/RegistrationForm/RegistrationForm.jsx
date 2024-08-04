import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/operations';

import css from './RegistrationForm.module.css';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" className={css.userInfo} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
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
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
}
