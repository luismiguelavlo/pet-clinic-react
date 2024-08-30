import { Link } from 'react-router-dom';
import styles from "./Homepage.module.css";
import { PageNav } from '../../components';


export const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          We care for your pets.
          <br />
          Your trusted veterinary clinic.
        </h1>
        <h2>
          Comprehensive care for every stage of your pet's life. From routine check-ups
          to advanced treatments, we ensure your pets are healthy and happy.
        </h2>
        <Link to="/app" className="cta">
          book your appointment 
        </Link>
      </section>
    </main>
  );
}
