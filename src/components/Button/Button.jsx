import {
    // HiOutlineTrash,
    HiOutlinePencil,
    HiOutlineUserAdd,
    HiOutlineLogout,
  } from 'react-icons/hi';

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
  
//   export const DeleteButton = ({ type, contactId, contactDelete }) => {
//     const handleDelBtn = () => {
//       contactDelete(contactId);
//     };
//     return (
//       <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
//         <HiOutlineTrash className={s.buttonDelSvg} size={16} />
//       </button>
//     );
//   };