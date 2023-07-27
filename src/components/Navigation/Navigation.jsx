import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { ReactComponent as AddIcon } from '../../images/logo.svg';

// import s from './Navigation.module.scss';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <AddIcon />
          </Link>
        </li>
        {token && (
          <li>
            <Link to="/contacts">
              <button >Phonebook</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};