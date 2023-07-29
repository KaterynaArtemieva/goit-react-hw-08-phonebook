import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthNavListSt = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  padding: 0;
  margin: auto 0;
`;

export const AuthNavItemSt = styled.button`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  // font: inherit;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  padding-left: 56px;
  display: flex;
  align-items: center;
  width: 216px;
  height: 56px;
  &:focus,
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;
export const AuthNavLinkSt = styled(Link)`
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 137%;
`;
