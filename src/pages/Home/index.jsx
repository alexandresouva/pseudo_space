import styles from './Home.module.scss';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import banner from '../../assets/images/banner.png';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Popular from '../../components/Popular';

const Home = () => {
  return (
    <>
      <Header />
      <section className={styles['page-content']}>
        <Sidebar />
        <main className={styles.main}>
          <div className={styles.main__banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
          <div className={styles.gallery}>
            <Gallery />
            <Popular />
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Home;
