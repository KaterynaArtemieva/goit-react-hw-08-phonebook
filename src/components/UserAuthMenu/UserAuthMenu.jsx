import { useSelector } from 'react-redux';
import { selectUserName, selectUserEmail } from 'redux/auth/authSelectors';
import { UserAuthMenuSt, TextSt } from './UserAuthMenu.styled';

export const UserAuthMenu = () => {
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);

  return (
    <>
      {email && (
        <UserAuthMenuSt>
          <TextSt>{`Hello ${name}!`}</TextSt>
          <TextSt>{email}</TextSt>
        </UserAuthMenuSt>
      )}
    </>
  );
};