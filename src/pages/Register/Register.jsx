import { createUser } from 'components/redux/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();

    const userName = event.currentTarget.name.value.trim();
    const userEmail = event.currentTarget.email.value.trim();
    const userPass = event.currentTarget.password.value.trim();

    dispatch(
      createUser({
        name: userName,
        email: userEmail,
        password: userPass,
      })
    );

    event.currentTarget.name.value = '';
    event.currentTarget.email.value = '';
    event.currentTarget.password.value = '';
  };

  return (
    <>
      <div>PhoneBook</div>
      <NavLink to="/login">Login</NavLink>
      <form action="submit" onSubmit={handleRegister}>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
        <label>
          Email:
          <input name="email" type="email" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
