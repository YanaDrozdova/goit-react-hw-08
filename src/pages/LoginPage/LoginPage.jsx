import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Enter your email & password</h3>
      <LoginForm />
      <p>
        Not registered yet? <Link to="/register" className={css.link}>Register</Link>
      </p>
    </div>
  );
}
