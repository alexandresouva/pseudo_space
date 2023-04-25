import logo from './images/logo.png';
import searchIcon from './images/search.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo da Pseudo Space" />
      <div className={styles.header__container}>
        <input
          type="text"
          placeholder="O que você procura?"
          className={styles.header__input}
        ></input>
        <img src={searchIcon} alt="Ícone de lupa" />
      </div>
    </header>
  );
};

export default Header;
