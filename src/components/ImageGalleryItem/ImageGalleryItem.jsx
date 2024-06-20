import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.scss";

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li
      className={styles.galleryItem}
      onClick={() => onImageClick(image.largeImageURL)}>
      <img
        src={image.webformatURL}
        alt=""
        className={styles.galleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
