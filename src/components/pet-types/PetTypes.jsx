import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '../card/Card';
import styles from './PetTypes.module.css';

const petTypes = [
  { name: 'Dog', image: '🐕‍🦺'},
  { name: 'Cat', image: '🐈‍⬛'},
  { name: 'Rabbit', image: '🐇'},
  { name: 'Hamster', image: '🐹'},
  { name: 'Parrot', image: '🦜'},
];

export const PetTypes = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pet_type = decodeURIComponent(searchParams.get('pet_type'));

  return (
    <div className={styles.petTypesContainer} onClick={() => navigate('schedule-appointments')}>
      <h1 className={styles.heading}>PETS</h1>
      <div className={styles.cardContainer}>
        {petTypes.map((petType) => (
          <Card 
            key={petType.name} 
            icon={petType.image} 
            isActive={pet_type === petType.name}
          >
            <h2>{petType.name}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};
