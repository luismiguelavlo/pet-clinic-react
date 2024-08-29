import { PageNav } from '../../components';
import styles from "./ContactPage.module.css";

export const ContactPage = () => {
  return (
    <main className={styles.contact}>
      <PageNav />

      <section className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h2>
            Get in Touch with Us
            <br />
            We're Here to Help Your Pets!
          </h2>
          <p>
            Whether you have a question, need to book an appointment, or simply want to learn more about our services, feel free to reach out. We're committed to providing the best care for your pets.
          </p>
          <ul className={styles.contactDetails}>
            <li>
              <strong>Address:</strong> 123 Pet Street, Pet City, PC 12345
            </li>
            <li>
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li>
              <strong>Email:</strong> contact@petclinic.com
            </li>
            <li>
              <strong>Working Hours:</strong> Mon - Fri: 8 AM - 6 PM, Sat: 9 AM - 4 PM
            </li>
          </ul>
        </div>
        <img src="clinic.jpg" alt="Front view of the veterinary clinic" className={styles.contactImage} />
      </section>
    </main>
  );
};
