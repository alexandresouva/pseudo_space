import styles from './Sidebar.module.scss';
import home from 'assets/images/icons/home-ativo.png';
import mostVisited from 'assets/images/icons/mais-vistas-inativo.png';
import mostLiked from 'assets/images/icons/mais-curtidas-inativo.png';
import news from 'assets/images/icons/novas-inativo.png';
import surpriseMe from 'assets/images/icons/surpreenda-me-inativo.png';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <img src={home} alt="" />
          <a href="#">Início</a>
        </li>
        <li className={styles.sidebar__item}>
          <img src={mostVisited} alt="" />
          <a href="#">Mais vistas</a>
        </li>
        <li className={styles.sidebar__item}>
          <img src={mostLiked} alt="" />
          <a href="#">Mais curtidas</a>
        </li>
        <li className={styles.sidebar__item}>
          <img src={news} alt="" />
          <a href="#">Novas</a>
        </li>
        <li className={styles.sidebar__item}>
          <img src={surpriseMe} alt="" />
          <a href="#">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
