import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './image-gallery.module.scss';

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      <ImageGalleryItem items={items} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = { items: [] };
