import { useSelector } from 'react-redux';
import { selectUserName, selectUserEmail } from 'redux/auth/authSelectors';

// import s from './UserAuthMenu.module.scss';

export const UserAuthMenu = () => {
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);

  return (
    <>
      {email && (
        <div>
          <p>{`Hello ${name}!`}</p>
          <p>{email}</p>
        </div>
      )}
    </>
  );
};