import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import SearchBox from './components/SearchBox/SearchBox';

// import { fetchContacts } from './redux/contacts/operations';
// import { selectError, selectIsLoading } from './redux/contacts/selectors';
import Layout from './components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// import HomePage from './pages/HomePage/HomePage';
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import ContactsPage from './pages/ContactsPage/ContactsPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    // dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user please wait...</div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
    // <div>
    //   <h1 className="title">Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ContactList />
    // </div>
  );
}
