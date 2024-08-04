import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Register your account</h3>
      <RegistrationForm />
      <p>
        Already registered? <Link to="/login" className={css.link}>Log In</Link>
      </p>
    </div>
  );
}
