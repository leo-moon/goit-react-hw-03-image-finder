import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({ items }) => {
  if (items && items.length) {
    const elements = items.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id} className={styles.item}>
        <img className={styles.item__image} src={webformatURL} alt="nature" />
      </li>
    ));
    return <>{elements}</>;
  }
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  items: [],
};
