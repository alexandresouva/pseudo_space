import styles from './Home.module.scss';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import banner from '../../assets/images/banner.png';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Sidebar />
          <div className={styles.main__image}>
            <h1>A galeria mais completa do espaço</h1>
            <img
              className={styles.main__image}
              src={banner}
              alt="A imagem da terra vista do espaço"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
