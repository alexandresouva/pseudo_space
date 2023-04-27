import styles from './Cards.module.scss';
import Card from './Card';

const Cards = ({ photos }) => {
  return (
    <ul className={styles.cards}>
      {photos.map((photo) => (
        <Card photo={photo} />
      ))}
    </ul>
  );
};

export default Cards;
