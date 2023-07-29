import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';

import { LayoutBoxSt } from './Layout.styled';


export const Layout = () => {
  return (
    <LayoutBoxSt>
      <AppBar />
      <UserAuthMenu />
      <Outlet />
    </LayoutBoxSt>
  );
};