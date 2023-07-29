import { useEffect } from 'react';
import { EditContactForm } from '../EditContactForm/EditContactForm';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { OverlaySt, ModalSt } from './Modal.styled';

export const Modal = ({ closeModal, param, addNewContact, contact }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <>
      <OverlaySt onClick={closeByBackdrop}>
        <ModalSt>
          {param === 'edit' && (
            <EditContactForm contact={contact} closeModal={closeModal} />
          )}
          {param === 'add' && <ContactForm addNewContact={addNewContact} />}
        </ModalSt>
      </OverlaySt>
    </>
  );
};
