import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineUserAdd,
  HiOutlineLogout,
} from 'react-icons/hi';
import { ButtonAddSt, ButtonDelSt, ButtonLogOutSt } from './Button.styled';

export const AuthButton = ({ text, clickHeandler }) => {
  return <ButtonAddSt onClick={clickHeandler}>{text}</ButtonAddSt>;
};

export const LogOutButton = ({ text, clickHeandler }) => {
  return (
    <ButtonLogOutSt onClick={clickHeandler}>
      {text} <HiOutlineLogout size={24} fill="#ffffff" color="#656ED3" />
    </ButtonLogOutSt>
  );
};

export const SaveButton = () => {
  return <ButtonAddSt>Save</ButtonAddSt>;
};

export const AddButton = ({ openModal, type }) => {
  const handleDelBtn = () => {
    openModal('add');
  };
  return (
    <ButtonDelSt type={type} onClick={handleDelBtn}>
      <HiOutlineUserAdd size={32} fill="#ffffff" color="#656ED3" />
    </ButtonDelSt>
  );
};

export const EditButton = ({ type, contact, openModal }) => {
  const handleDelBtn = () => {
    openModal('edit', contact);
  };
  return (
    <ButtonDelSt type={type} onClick={handleDelBtn}>
      <HiOutlinePencil size={16} fill="#ffffff" color="#656ED3" />
    </ButtonDelSt>
  );
};

export const DeleteButton = ({ type, contactId, contactDelete }) => {
  const handleDelBtn = () => {
    contactDelete(contactId);
  };
  return (
    <ButtonDelSt type={type} onClick={handleDelBtn}>
      <HiOutlineTrash size={16} fill="#ffffff" color="#656ED3" />
    </ButtonDelSt>
  );
};
