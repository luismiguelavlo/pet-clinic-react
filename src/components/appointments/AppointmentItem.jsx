import { Link } from 'react-router-dom'
import styles from './AppointmentItem.module.css'

export const AppointmentItem = ({ appointment }) => {
  const { id, name, date, pet_type, medic } = appointment

  return (
    <li>
      <Link className={styles.appointmentItem} to={`${id}?medic=${encodeURIComponent(medic)}&pet_type=${encodeURIComponent(pet_type)}`}>
        <span className={styles.emoji}>📅</span>
        <h3 className={styles.name}>{name}</h3>
        <time className={styles.date}>({date})</time>
        <button className={styles.deleteBtn}>
          &times;
        </button>
      </Link>
    </li>
  )
}