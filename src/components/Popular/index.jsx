import styles from './Popular.module.scss';
import photosPopular from './photos_popular.json';

const Popular = () => {
  const showAlert = () => {
    alert('Estamos trabalhando nisso! Fique atento a próxima versão');
  };
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {photosPopular.map((photo) => (
          <li key={photo.id}>
            <img onClick={showAlert} src={photo.path} alt={photo.alt} />
          </li>
        ))}
      </ul>
      <button onClick={showAlert}>Ver mais fotos</button>
    </aside>
  );
};

export default Popular;
