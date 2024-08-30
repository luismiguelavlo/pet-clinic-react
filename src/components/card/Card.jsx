import styles from './Card.module.css';
import clsx from 'clsx';

export const Card = ({ children, icon, isActive, onClick }) => {
  return (
    <section 
      className={clsx(styles.card, { [styles.active]: isActive })} 
      onClick={onClick} // Aquí se maneja el clic
    >
      <span>{icon}</span>
      {children}
    </section>
  );
};
