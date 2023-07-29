import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
import { LogOutButton } from '../Button/Button';
import { AppBarSt } from './AppBar.styled';

export const AppBar = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const clickHeandler = () => {
    dispatch(logout());
  };
  return (
    <AppBarSt>
      <Navigation />
      {!token && <AuthNavigation />}
      {token && <LogOutButton text={'LogOut'} clickHeandler={clickHeandler} />}
    </AppBarSt>
  );
};
