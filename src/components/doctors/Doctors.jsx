import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '../card/Card';
import styles from './Doctors.module.css';

const veterinarians = [
  { name: 'Dr. Carlos Pérez', specialty: 'Medicina Interna de Perros y Gatos' },
  { name: 'Dra. Ana Gómez', specialty: 'Cirugía General de Animales' },
  { name: 'Dr. Jorge Sánchez', specialty: 'Dermatología Veterinaria' },
  { name: 'Dra. María Fernández', specialty: 'Odontología Veterinaria' },
  { name: 'Dr. Juan López', specialty: 'Cardiología Veterinaria' },
];

export const Doctors = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const medicName = decodeURIComponent(searchParams.get('medic'));

  
  const handleCardClick = (vetName) => {
    const encodedName = encodeURIComponent(vetName);
    searchParams.set('medic', encodedName);  // Establece el nuevo valor sin eliminar los existentes
    setSearchParams(searchParams);

    if(location.pathname.split('/')[2] === 'schedule-appointments') return;

    navigate(`/app/schedule-appointments?medic=${encodedName}`);
      
  };

  return (
    <div className={styles.doctorsContainer}>
      <h1 className={styles.heading}>DOCTORS</h1>
      <div className={styles.cardContainer}>
        {veterinarians.map((vet) => (
          <Card
            key={vet.name}
            icon="🧑🏻‍⚕️"
            isActive={medicName === vet.name}
            onClick={() => handleCardClick(vet.name)}
          >
            <h2>{vet.name}</h2>
            <p>{vet.specialty}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
