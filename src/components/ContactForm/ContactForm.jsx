import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 letters')
    .max(50, 'Maximum 50 letters')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Phone number must be like 123-45-67')
    .required('Required'),
});

export default function ContactForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.group}>
            <label htmlFor={`name-${id}`}>Name</label>
            <Field
              className={css.contactInfo}
              type="text"
              name="name"
              id={`name-${id}`}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.group}>
            <label htmlFor={`number-${id}`}>Number</label>
            <Field
              className={css.contactInfo}
              type="text"
              name="number"
              id={`number-${id}`}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <button className={css.addBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
