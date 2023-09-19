import { Navigate, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useSelector } from 'react-redux';
import { getUser } from './redux/selectos';
import Contacts from 'pages/Contacts';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  const { user } = useSelector(getUser);

  return (
    <ChakraProvider>
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
            element={!user?.token ? <Navigate to="/login" /> : <Contacts />}
          />
          <Route
            path="*"
            element={
              user?.token ? (
                <Navigate to="/contacts" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </ChakraProvider>
  );
};

export default App;
