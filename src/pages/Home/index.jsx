import styles from './Home.module.scss';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import banner from '../../assets/images/banner.png';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';

const Home = () => {
  return (
    <>
      <Header />
      <section className={styles['main-content']}>
        <Sidebar />
        <main className={styles.gallery}>
          <div className={styles.gallery__image}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
          <Gallery />
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Home;
