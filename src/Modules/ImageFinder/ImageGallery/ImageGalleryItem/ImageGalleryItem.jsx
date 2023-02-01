import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = () => {
  return (
    <li className={styles.item}>
      <img className={styles.item__image} src="#" alt="nature" />
    </li>
  );
};

export default ImageGalleryItem;
