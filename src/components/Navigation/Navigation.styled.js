import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavListSt = styled.ul`
list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 0;
  margin: auto 0;`;

export const NavItemSt = styled.button`
font: inherit;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
padding-left: 56px;

display: flex;
align-items: center;
width: 216px;
height: 56px;

color: #ffffff;

&:focus, &:hover {
  cursor: pointer;
  transform: scale(1.5);
}
`;
export const NavLinkSt = styled(Link)`
position: relative;
top: 50%;
display: flex;
align-items: center;
justify-content: left;
text-decoration: none;

color: #ffffff;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 137%;
`;
