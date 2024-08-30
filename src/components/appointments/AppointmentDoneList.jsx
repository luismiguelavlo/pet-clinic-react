
import Message from '../message/Message'
import Spinner from '../spinner/Spinner'
import styles from './AppointmentDoneList.module.css'
import { AppointmentDoneItem } from './AppointmentDoneItem'
import { useAppointments } from '../../context/AppointmentContext'

export const AppointmentDoneList = () => {

  const { appointmentsDone, isLoading } = useAppointments();

  if (isLoading) {
    return <Spinner />
  }

  if(appointmentsDone.length === 0) return <Message message="Add your first appointment" />

  return (
    <ul className={styles.appointmentDoneList}> 
      {
        appointmentsDone.map(appointment => <AppointmentDoneItem key={appointment.id} appointment={appointment} />)
      }
    </ul>
  )
}