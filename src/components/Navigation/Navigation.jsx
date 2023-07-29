import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { NavItemSt, NavLinkSt, NavListSt } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <NavListSt>
        <li>
          <NavLinkSt to="/">
            <NavItemSt>Home</NavItemSt>
          </NavLinkSt>
        </li>
        {token && (
          <li>
            <NavLinkSt to="/contacts">
              <NavItemSt>Phonebook</NavItemSt>
            </NavLinkSt>
          </li>
        )}
      </NavListSt>
    </nav>
  );
};
