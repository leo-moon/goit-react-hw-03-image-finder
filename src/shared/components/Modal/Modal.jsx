import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

const modalAbove = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeImage = ({ target, currentTarget, code }) => {
    console.log('target', target);
    console.log('currentTarget', currentTarget);
    if (target === currentTarget || code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { children, closeModal } = this.props;
    const { closeImage } = this;
    return createPortal(
      <div className={styles.overlay} onClick={closeImage}>
        <div className={styles.modal}>{children}</div>
      </div>,
      modalAbove
    );
  }
}

export default Modal;
