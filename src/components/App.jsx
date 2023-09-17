import { Navigate, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useSelector } from 'react-redux';
import { getUser } from './redux/selectos';
import Contacts from 'pages/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';

const App = () => {
  const { user } = useSelector(getUser);

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={user?.token ? <Navigate to="/contacts" /> : <Login />}
        />
        <Route
          path="/register"
          element={user?.token ? <Navigate to="/contacts" /> : <Register />}
        />
        <Route
          path="/contacts"
          element={
            !user?.token ? (
              <Navigate to="/login" />
            ) : (
              <Contacts>
                <PhoneBook />
                <Filter />
              </Contacts>
            )
          }
        />
        <Route
          path="*"
          element={
            user?.token ? <Navigate to="/contacts" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
