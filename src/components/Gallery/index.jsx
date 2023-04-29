import Tags from 'components/Tags';
import styles from './Gallery.module.scss';
import Cards from './Cards';
import photos from './photos.json';
import { useState } from 'react';

const Gallery = () => {
  const [items, setItems] = useState(photos);
  const tags = ['Todas', ...new Set(photos.map((photo) => photo.tag))];

  const filterPhotos = (tag) => {
    let photosFound = photos.filter((photo) => photo.tag === tag);

    if (tag === 'Todas') photosFound = photos;

    setItems(photosFound);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags items={tags} filterPhotos={filterPhotos} />
      <Cards photos={items} />
    </section>
  );
};

export default Gallery;
