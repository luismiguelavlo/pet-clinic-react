import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout, ContactPage, Homepage, Login, PageNotFound, ServicePage } from './pages'
import { Appointment, AppointmentDoneList, AppointmentList, Form } from './components'
import { useEffect, useState } from 'react'
import { getAppointments, getAppointmentsDone } from './services'



function App() {

  const [appointments, setAppointments] = useState([])
  const [appointmentsDone, setAppointmentsDone] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getAppointments()
      .then(appointments => {
        setAppointments(appointments)
      })
      .catch(err => {
        alert("There was an error loading data...")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    getAppointmentsDone()
      .then(appointmentsDone => {
        setAppointmentsDone(appointmentsDone)
      })
      .catch(err => {
        alert("There was an error loading data...")
      })
  }, [])
  
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="appointments" />} />
          <Route path="appointments" element={<AppointmentList appointments={appointments} isLoading={isLoading} />} />
          <Route path="appointments/:id" element={<Appointment />} />
          <Route path="appointments-done" element={<AppointmentDoneList appointments={appointmentsDone} />} />
          <Route path="schedule-appointments" element={<Form />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
