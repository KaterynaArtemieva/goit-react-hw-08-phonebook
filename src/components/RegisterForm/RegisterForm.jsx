import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/authOperations';
import { AuthButton } from '../Button/Button';
import { FormSt, LabelSt, InputSt } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(registration({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FormSt onSubmit={handleSubmit}>
      <LabelSt>
        Name:
        <InputSt type="text" name="name" value={name} onChange={handleChange} />
      </LabelSt>
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
      <AuthButton text={'Register'} />
    </FormSt>
  );
};
