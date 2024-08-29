import { Link } from 'react-router-dom';
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/pet-food.svg" alt="PetClinic logo" className={styles.logo} />
    </Link>
  )
}

export default Logo;
