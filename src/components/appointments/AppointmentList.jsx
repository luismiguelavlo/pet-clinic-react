
import { useNavigate } from 'react-router-dom'
import { useAppointments } from '../../context/AppointmentContext'
import { Button } from '../button/Button'
import Message from '../message/Message'
import Spinner from '../spinner/Spinner'
import { AppointmentItem } from './AppointmentItem'
import styles from './AppointmentList.module.css'

export const AppointmentList = () => {

  const { appointments, isLoading } = useAppointments()
  const navigate = useNavigate()

  if (isLoading) {
    return <Spinner />
  }

  if (appointments.length === 0) return <Message message="Add your first appointment" />

  return (
    <>
      <ul className={styles.appointmentList}>
        {
          appointments.map(appointment => <AppointmentItem key={appointment.id} appointment={appointment} />)
        }
      </ul>
      <Button type='primary' onClick={() => navigate('/app/schedule-appointments')}>Add new appointment</Button>
    </>
  )
}