import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/сontacts/contactsOperation';
import { SaveButton } from '../Button/Button';
import { FormSt, InputSt, LabelSt, TitleSt } from './EditContactForm.styled';

export const EditContactForm = ({ contact, closeModal }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const dispatch = useDispatch();

  const handleContactInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormReset = () => {
    setName('');
    setNumber('');
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const id = contact.id;
    dispatch(editContact({ id, name, number }));
    onFormReset();
    closeModal();
  };

  return (
    <FormSt onSubmit={e => handleOnSubmit(e)}>
      <TitleSt>Edit contact</TitleSt>
      <LabelSt>
        Name
        <InputSt
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleContactInput}
        />
      </LabelSt>
      <LabelSt>
        Number
        <InputSt
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleContactInput}
        />
      </LabelSt>
      <SaveButton />
    </FormSt>
  );
};
