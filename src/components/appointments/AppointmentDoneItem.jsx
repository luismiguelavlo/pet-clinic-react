import styles from "./AppointmentDoneItem.module.css";

export const AppointmentDoneItem = ({ appointment }) => {
  return (
    <li className={styles.appointmentDoneItem}>
      <span>🐾🦮🐈🐾</span>
      <span>{appointment.medic}</span>
      <span>Paciente: <small>{appointment.name}</small></span>
    </li>
  );
}


