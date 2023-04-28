import Tags from 'components/Tags';
import styles from './Gallery.module.scss';
import Cards from './Cards';
import photos from './photos.json';

const Gallery = () => {
  const tags = ['Estrelas', 'Galáxias', 'Luas', 'Planetas'];

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags items={tags} />
      <Cards photos={photos} />
    </section>
  );
};

export default Gallery;
