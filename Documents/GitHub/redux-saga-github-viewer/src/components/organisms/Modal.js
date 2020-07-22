import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalContainer = ({ show, component }) => {
  if (!show) {
    return <></>;
  }
  return <Modal isOpen={show}>{component}</Modal>;
};

ModalContainer.propTypes = {
  show: PropTypes.bool,
  component: PropTypes.object,
};

export default ModalContainer;
