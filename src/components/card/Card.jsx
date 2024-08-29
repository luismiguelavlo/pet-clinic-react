import styles from './Card.module.css';
import clsx from 'clsx';

export const Card = ({ children, icon, isActive }) => {
  return (
    <section className={clsx(styles.card, { [styles.active]: isActive })}>
      <span>{icon}</span>
      {children}
    </section>
  );
}
