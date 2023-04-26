import styles from './Footer.module.scss';
import fb_icon from './images/facebook.svg';
import tw_icon from './images/twitter.svg';
import ig_icon from './images/instagram.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__icons}>
        <li className={styles.footer__icon}>
          <a href="#" target="_blank">
            <img src={fb_icon} alt="Logo do Facebook" />
          </a>
        </li>
        <li className={styles.footer__icon}>
          <a href="#" target="_blank">
            <img src={tw_icon} alt="Logo do Twitter" />
          </a>
        </li>
        <li className={styles.footer__icon}>
          <a href="#" target="_blank">
            <img src={ig_icon} alt="Logo do Instagram" />
          </a>
        </li>
      </ul>
      <p className={styles.footer__credits}>
        Desenvolvido por{' '}
        <a href="https://github.com/alexandresouva">Alexandre Souva</a>
      </p>
    </footer>
  );
};

export default Footer;
