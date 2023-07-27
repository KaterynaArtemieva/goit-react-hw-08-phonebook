// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/сontacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Contact } from 'components/ContactItem/ContactItem';
import { DeleteButton, EditButton } from '../Button/Button';
// import s from './ContactList.module.scss';

export const ContactList = ({ contactDelete, openModal }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <ul>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
            <div>
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
            </div>
          </li>
        ))}
    </ul>
  );
};
