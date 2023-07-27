import { Link } from 'react-router-dom';

// import s from './AuthNavigation.module.scss';

export const AuthNavigation = () => {
  return (
    <ul>
      <li>
        <Link to="/register">
          <button>Registaration</button>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </li>
    </ul>
  );
};