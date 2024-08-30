import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { Card } from '../card/Card';
import styles from './PetTypes.module.css';

const petTypes = [
  { name: 'Dog', image: '🐕‍🦺' },
  { name: 'Cat', image: '🐈‍⬛' },
  { name: 'Rabbit', image: '🐇' },
  { name: 'Hamster', image: '🐹' },
  { name: 'Parrot', image: '🦜' },
];

export const PetTypes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const pet_type = decodeURIComponent(searchParams.get('pet_type'));

  const handleCardClick = (petType) => {
    const encodedPetType = encodeURIComponent(petType);
    searchParams.set('pet_type', encodedPetType);  // Establece el nuevo valor sin eliminar los existentes
    setSearchParams(searchParams);  // Actualiza los parámetros en la URL

    if(location.pathname.split('/')[2] === 'schedule-appointments') return;

    navigate(`/app/schedule-appointments?pet_type=${encodedPetType}`);
  };

  return (
    <div className={styles.petTypesContainer}>
      <h1 className={styles.heading}>PETS</h1>
      <div className={styles.cardContainer}>
        {petTypes.map((petType) => (
          <Card
            key={petType.name}
            icon={petType.image}
            isActive={pet_type === petType.name}
            onClick={() => handleCardClick(petType.name)}
          >
            <h2>{petType.name}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};
