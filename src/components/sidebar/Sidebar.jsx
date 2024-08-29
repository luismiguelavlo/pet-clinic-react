import { Outlet } from 'react-router-dom'
import { AppNav } from '../appNav/AppNav'
import Logo from '../logo/Logo'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by PetClinic Inc</p>
      </footer>
    </div>
  )
}