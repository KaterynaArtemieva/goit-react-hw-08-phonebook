import {
  AuthNavItemSt,
  AuthNavLinkSt,
  AuthNavListSt,
} from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <AuthNavListSt>
      <li>
        <AuthNavLinkSt to="/register">
          <AuthNavItemSt>Registaration</AuthNavItemSt>
        </AuthNavLinkSt>
      </li>
      <li>
        <AuthNavLinkSt to="/login">
          <AuthNavItemSt>Login</AuthNavItemSt>
        </AuthNavLinkSt>
      </li>
    </AuthNavListSt>
  );
};
