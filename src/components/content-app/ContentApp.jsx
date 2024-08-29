import { Doctors } from '../doctors/Doctors'
import { PetTypes } from '../pet-types/PetTypes'
import styles from './ContentApp.module.css'

export const ContentApp = () => {

  return (
    <div className={styles.contentAppContainer}>
      <Doctors />
      <PetTypes />
    </div>
  )
}