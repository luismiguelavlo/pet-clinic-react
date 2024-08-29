import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.css'

export const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="appointments">Appointments</NavLink>
        </li>
        <li>
          <NavLink to="appointments-done">Attentions</NavLink>
        </li>
      </ul>
    </nav>
  )
}