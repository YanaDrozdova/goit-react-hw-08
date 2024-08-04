import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Our Contact Management Solution!</h1>
      <div className={css.wrapper}>
        <p className={css.text}>
          In the past, we used to jot down all our phone numbers in a notebook.
          While that method served its purpose, it’s no longer practical in
          today’s fast-paced world—how often is a pen and notebook readily
          available when you need them?
        </p>
        <p className={css.text}>
          Today, we carry smartphones and use computers, which offer a more
          convenient way to manage and store our information. Our website
          provides you with a digital solution for managing your contacts,
          allowing you to create a personal contact repository that you can
          access from anywhere on the planet, as long as there’s an internet
          connection.
        </p>
        <p className={css.text}>
          Say goodbye to lost notes and hello to seamless contact management
          with our easy-to-use platform. Start organizing your contacts today
          and stay connected wherever you are!
        </p>
        <Link to="/register" className={css.link}>
          Sign up!
        </Link>
      </div>
    </div>
  );
}
