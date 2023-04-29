import styles from './Tags.module.scss';

const Tags = ({ items, filterPhotos }) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {items.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              filterPhotos(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
