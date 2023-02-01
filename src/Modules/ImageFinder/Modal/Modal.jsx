import styles from './modal.module.scss';

const Modal = () => {
  return (
    <div class={styles.overlay}>
      <div class={styles.modal}>
        <img src="#" alt="nature" />
      </div>
    </div>
  );
};

export default Modal;
