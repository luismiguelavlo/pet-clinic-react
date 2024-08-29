
import Message from '../message/Message'
import Spinner from '../spinner/Spinner'
import styles from './AppointmentDoneList.module.css'
import { AppointmentDoneItem } from './AppointmentDoneItem'

export const AppointmentDoneList = ({ appointments, isLoading }) => {

  if (isLoading) {
    return <Spinner />
  }

  if(appointments.length === 0) return <Message message="Add your first appointment" />

  return (
    <ul className={styles.appointmentDoneList}> 
      {
        appointments.map(appointment => <AppointmentDoneItem key={appointment.id} appointment={appointment} />)
      }
    </ul>
  )
}