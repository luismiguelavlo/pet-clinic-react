import { useNavigate, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { Card } from '../card/Card';
import styles from './Doctors.module.css';

// Arreglo de veterinarios con sus especialidades
const veterinarians = [
  { name: 'Dr. Carlos Pérez', specialty: 'Medicina Interna de Perros y Gatos' },
  { name: 'Dra. Ana Gómez', specialty: 'Cirugía General de Animales' },
  { name: 'Dr. Jorge Sánchez', specialty: 'Dermatología Veterinaria' },
  { name: 'Dra. María Fernández', specialty: 'Odontología Veterinaria' },
  { name: 'Dr. Juan López', specialty: 'Cardiología Veterinaria' },
  // Puedes agregar más veterinarios aquí si lo deseas
];

export const Doctors = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medicName = decodeURIComponent(searchParams.get('medic'));

  return (
    <div className={styles.doctorsContainer} onClick={() => navigate('schedule-appointments')}>
      <h1 className={styles.heading}>DOCTORS</h1>
      <div className={styles.cardContainer}>
        {veterinarians.map((vet) => (
          <Card
            key={vet.name}
            icon='🧑🏻‍⚕️'
            isActive={medicName === vet.name}
          >
            <h2>{vet.name}</h2>
            <p>{vet.specialty}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
