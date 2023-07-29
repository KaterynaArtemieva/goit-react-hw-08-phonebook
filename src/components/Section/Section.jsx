import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { SectionSt } from './Section.styled';

export const Section = ({ children }) => {
  const token = useSelector(selectToken);
  return <>{token && <SectionSt> {children}</SectionSt>}</>;
};