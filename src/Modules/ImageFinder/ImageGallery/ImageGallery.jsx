import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './image-gallery.module.scss';

const ImageGallery = () => {
  return (
    <ul className={styles.gallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
