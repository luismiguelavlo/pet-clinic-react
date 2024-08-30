import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout, ContactPage, Homepage, Login, PageNotFound, ServicePage } from './pages'
import { Appointment, AppointmentDoneList, AppointmentList, Form } from './components'
import { AppointmentProvider } from './context/AppointmentContext'



function App () {
  return (
    <AppointmentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="appointments" />} />
            <Route path="appointments" element={<AppointmentList />} />
            <Route path="appointments/:id" element={<Appointment />} />
            <Route path="appointments-done" element={<AppointmentDoneList />} />
            <Route path="schedule-appointments" element={<Form />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppointmentProvider>
  )
}

export default App
