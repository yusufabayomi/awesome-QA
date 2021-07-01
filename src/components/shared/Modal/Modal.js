import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children, showModal, toggleShowModal, title }) => {
  if (showModal) {
    return ReactDOM.createPortal(
      <>
        <div className='modal fade show' tabIndex='-1' aria-hidden='true' onClick={() => toggleShowModal()}>
          <div className='modal-dialog modal-dialog-centered' onClick={(e) => e.stopPropagation()}>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>{title}</h5>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' onClick={() => toggleShowModal()}></button>
              </div>
              <div className='modal-body'>{children}</div>
            </div>
          </div>
        </div>
      </>,
      document.getElementById('modal-root')
    );
  }
  return null;
};

export default Modal;
