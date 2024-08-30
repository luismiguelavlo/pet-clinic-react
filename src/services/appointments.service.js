import { petClinicApi } from '../utils/api-pet-clinic';

export const getAppointments = async () => {
  try {
    const response = await petClinicApi.get('/appointments');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching appointments: ', { cause: error });
  } 
}

export const getAppointmentsDone = async () => {
  try {
    const response = await petClinicApi.get('/appointments-done');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching appointments: ', { cause: error });
  } 
}

export const getAppointmentById = async (id) => {
  try {
    const response = await petClinicApi.get(`/appointments/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching appointment by id: ', { cause: error });
  }
}

export const createAppointmentApi = async (appointmentData) => {
  try {
    const response = await petClinicApi.post('/appointments', appointmentData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating appointment: ', { cause: error });
  }
}

export const deleteAppointmentApi = async (id) => {
  try {
    const response = await petClinicApi.delete(`/appointments/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting appointment: ', { cause: error });
  }
}

export const updateAppointmentApi = async (id, appointmentData) => {
  try {
    const response = await petClinicApi.patch(`/appointments/${id}`, appointmentData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating appointment: ', { cause: error });
  }
}