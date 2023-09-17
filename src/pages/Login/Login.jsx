import { loginUser } from 'components/redux/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();

  const login = event => {
    event.preventDefault();

    const userEmail = event.currentTarget.email.value.trim();
    const userPass = event.currentTarget.password.value.trim();

    const user = {
      email: userEmail,
      password: userPass,
    };

    dispatch(loginUser(user));

    event.currentTarget.email.value = '';
    event.currentTarget.password.value = '';
  };

  return (
    <>
      <div>PhoneBook</div>
      <NavLink to="/register">Register</NavLink>
      <form action="submit" onSubmit={login}>
        <label>
          Email:
          <input name="email" type="email" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
