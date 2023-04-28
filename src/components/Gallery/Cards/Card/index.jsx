import styles from './Card.module.scss';
import favoriteIcon from '../../images/favorito.png';
import openIcon from '../../images/open.png';

const Card = ({ photo }) => {
  return (
    <li key={photo.id} className={styles.card}>
      <img className={styles.card__image} src={photo.image} alt={photo.title} />
      <div className={styles.card__description}>
        <p className={styles.card__title}>{photo.title}</p>
        <div>
          <p>{photo.credits}</p>
          <span>
            <img
              src={favoriteIcon}
              alt="Ícone de coração para tornar favorito"
            />
            <img src={openIcon} alt="Ícone para abrir modal" />
          </span>
        </div>
      </div>
    </li>
  );
};

export default Card;
