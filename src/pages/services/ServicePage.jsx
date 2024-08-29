import { PageNav } from '../../components';
import styles from "./ServicePage.module.css";

const ServiceCard = ({ image, title, description }) => (
  <div className={styles.card}>
    <span>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </span>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

export const ServicePage = () => {
  return (
    <main className={styles.service}>
      <PageNav />

      <section className={styles.introSection}>
        <h2>Welcome to Our Pet Clinic</h2>
        <img
          src="vet-serv.webp"
          alt="person with dog overlooking mountain with sunset"
          className={styles.introImage}
        />
        <p>
          We provide comprehensive care for your pets, ensuring they lead happy and healthy lives.
          From routine check-ups to advanced surgical procedures, our team is here to support you and your pets.
        </p>
      </section>

      <section className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.cardsContainer}>
          <ServiceCard
            image="mascota.png"
            title="Wellness Exams"
            description="Regular health check-ups to ensure your pet is in optimal health."
          />
          <ServiceCard
            image="mascota.png"
            title="Vaccinations"
            description="Keep your pets safe from common diseases with our vaccination services."
          />
          <ServiceCard
            image="mascota.png"
            title="Surgery"
            description="Advanced surgical procedures performed with the utmost care."
          />
        </div>
      </section>
    </main>
  );
};
