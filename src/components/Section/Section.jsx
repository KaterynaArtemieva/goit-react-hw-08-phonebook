import { Box } from 'components/Box/Box.styled';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export const Section = ({ children }) => {
  const token = useSelector(selectToken);
  return <>{token && <Box> {children}</Box>}</>;
};
