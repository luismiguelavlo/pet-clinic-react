
import Message from '../message/Message'
import Spinner from '../spinner/Spinner'
import { AppointmentItem } from './AppointmentItem'
import styles from './AppointmentList.module.css'

export const AppointmentList = ({ appointments, isLoading }) => {

  if (isLoading) {
    return <Spinner />
  }

  if(appointments.length === 0) return <Message message="Add your first appointment" />

  return (
    <ul className={styles.appointmentList}> 
      {
        appointments.map(appointment => <AppointmentItem key={appointment.id} appointment={appointment} />)
      }
    </ul>
  )
}