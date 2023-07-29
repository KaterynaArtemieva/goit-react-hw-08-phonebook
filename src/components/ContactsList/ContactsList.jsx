import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/сontacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Contact } from 'components/ContactItem/ContactItem';
import { DeleteButton, EditButton } from '../Button/Button';
import { ListSt, ItemSt, ButtonBoxSt } from './ContactsList.styled';

export const ContactList = ({ contactDelete, openModal }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <ListSt>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <ItemSt key={contact.id}>
            <Contact contact={contact} />
            <ButtonBoxSt>
              <EditButton
                type="button"
                openModal={openModal}
                contact={contact}
              />
              <DeleteButton
                type="button"
                contactDelete={contactDelete}
                contactId={contact.id}
              />
            </ButtonBoxSt>
          </ItemSt>
        ))}
    </ListSt>
  );
};
