// import PropTypes from 'prop-types';

import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineUserAdd,
  HiOutlineLogout,
} from 'react-icons/hi';
// import s from './Button.module.scss';

export const AuthButton = ({ text, clickHeandler }) => {
  return (
    <button onClick={clickHeandler}>
      {text}
    </button>
  );
};

export const LogOutButton = ({ text, clickHeandler }) => {
  return (
    <button onClick={clickHeandler}>
      {text} <HiOutlineLogout size={24} />
    </button>
  );
};

export const SaveButton = () => {
  return <button>Save</button>;
};

export const AddButton = ({ openModal, type }) => {
  const handleDelBtn = () => {
    openModal('add');
  };
  return (
    <button type={type} onClick={handleDelBtn}>
      <HiOutlineUserAdd size={32} />
    </button>
  );
};

export const EditButton = ({ type, contact, openModal }) => {
  const handleDelBtn = () => {
    openModal('edit', contact);
  };
  return (
    <button type={type} onClick={handleDelBtn}>
      <HiOutlinePencil size={16} />
    </button>
  );
};

export const DeleteButton = ({ type, contactId, contactDelete }) => {
  const handleDelBtn = () => {
    contactDelete(contactId);
  };
  return (
    <button type={type} onClick={handleDelBtn}>
      <HiOutlineTrash size={16} />
    </button>
  );
};

// DeleteButton.propTypes = {
//   type: PropTypes.string.isRequired,
//   contactId: PropTypes.string.isRequired,
//   contactDelete: PropTypes.func.isRequired,
// };