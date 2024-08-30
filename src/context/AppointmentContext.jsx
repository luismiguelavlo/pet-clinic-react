import { createContext, useContext, useEffect, useState } from 'react';
import { createAppointmentApi, deleteAppointmentApi, getAppointmentById, getAppointments, getAppointmentsDone, updateAppointmentApi } from '../services';

const AppointmentContext = createContext();

function AppointmentProvider({ children }){
  const [appointments, setAppointments] = useState([])
  const [appointmentsDone, setAppointmentsDone] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentAppointment, setCurrentAppointment] = useState({})

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
    setIsLoading(true)
    getAppointmentsDone()
      .then(appointmentsDone => {
        setAppointmentsDone(appointmentsDone)
      })
      .catch(err => {
        alert("There was an error loading data...")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  function getAppointment(id){
    setIsLoading(true)
    getAppointmentById(id)
      .then(appointment => {
        setCurrentAppointment(appointment)
      })
      .catch(err => {
        alert("There was an error loading data...")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function createAppointment(appointmentData){
    setIsLoading(true)
    createAppointmentApi(appointmentData)
      .then(appointment => {
        setAppointments(appointments => [...appointments, appointment])
      })
      .catch(err => {
        alert("There was an error creating appointment...")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function startDeleteAppointment (id) {
    setIsLoading(true)
    deleteAppointmentApi(id)
      .then(appointment => {
        setAppointments(appointments => appointments.filter(appointment => appointment.id !== id))
      })
      .catch(err => {
        alert("There was an error deleting appointment...")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function startUpdateAppointment (id, appointmentData) {
    setIsLoading(true)
    updateAppointmentApi(id, appointmentData)
      .then(appointmentUpdated => {
        setAppointments(appointments => appointments.map(appointment => appointment.id === id ? appointmentUpdated : appointment))
      })
      .catch(err => {
        alert("There was an error updating appointment...")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return <AppointmentContext.Provider value={{
    appointments,
    appointmentsDone,
    isLoading,
    currentAppointment,
    getAppointment,
    createAppointment,
    startDeleteAppointment,
    startUpdateAppointment
  }}>
    {children}
  </AppointmentContext.Provider>
}

function useAppointments() {
  const context = useContext(AppointmentContext);
  if(context === undefined) throw new Error('Appointments contex was used outside of the appointments provider');
  return context;
}



export { AppointmentProvider, useAppointments } 