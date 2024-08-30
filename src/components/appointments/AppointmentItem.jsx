import { Link } from 'react-router-dom'
import styles from './AppointmentItem.module.css'
import clsx from 'clsx';
import { useAppointments } from '../../context/AppointmentContext';
import { Button } from '../button/Button';

export const AppointmentItem = ({ appointment }) => {
  const { currentAppointment, startDeleteAppointment } = useAppointments();
  const { id, name, date, pet_type, medic } = appointment

  const isActive = currentAppointment.id === id;

  const handleDeleteAppointment = (e) => {
    e.preventDefault();
    startDeleteAppointment(id)
  }

  return (
    <li>
      <Link className={(clsx(styles.appointmentItem, {[styles['appointmentItem--active']]: isActive}))} to={`${id}?medic=${encodeURIComponent(medic)}&pet_type=${encodeURIComponent(pet_type)}`}>
        <span className={styles.emoji}>📅</span>
        <h3 className={styles.name}>{name}</h3>
        <time className={styles.date}>({date})</time>
        <button className={styles.deleteBtn} onClick={handleDeleteAppointment}>
          &times;
        </button>
      </Link>
    </li>
  )
}