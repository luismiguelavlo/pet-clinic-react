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