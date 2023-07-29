import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { AuthButton } from '../Button/Button';
import { FormSt, LabelSt, InputSt } from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <FormSt onSubmit={handleSubmit}>
      <LabelSt>
        Email:
        <InputSt
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </LabelSt>
      <LabelSt>
        Password:
        <InputSt
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </LabelSt>
      <AuthButton text={'LogIn'} />
    </FormSt>
  );
};
