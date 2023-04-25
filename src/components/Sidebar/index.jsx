import styles from './Sidebar.module.scss';
import home from '../../images/icons/home-ativo.png';
import mostVisited from '../../images/icons/mais-vistas-inativo.png';
import mostLiked from '../../images/icons/mais-curtidas-inativo.png';
import news from '../../images/icons/novas-inativo.png';
import surpriseMe from '../../images/icons/surpreenda-me-inativo.png';

const Sidebar = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="#">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostVisited} alt="" />
          <a href="#">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostLiked} alt="" />
          <a href="#">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={news} alt="" />
          <a href="#">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpriseMe} alt="" />
          <a href="#">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
