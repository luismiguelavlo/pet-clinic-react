import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from "./Appointment.module.css";
import { useAppointments } from '../../context/AppointmentContext';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import { BackButton } from '../button/BackButton';
import { Button } from '../button/Button';
import { Modal } from '../modal/Modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const schema = z.object({
  name: z.string().min(1, { message: "Pet name is required" }),
  reason: z.string().min(1, { message: "Reason for consultation is required" }),
});

export const Appointment = () => {
  const { id } = useParams();
  const { getAppointment, currentAppointment, isLoading, startUpdateAppointment } = useAppointments();
  const { name, date, reason } = currentAppointment;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: name || '',
      reason: reason || '',
    },
  });

  useEffect(() => {
    if (currentAppointment) {
      reset({
        name: name || '',
        reason: reason || '',
      });
    }
  }, [currentAppointment, reset]);

  useEffect(() => {
    getAppointment(id);
  }, [id]);

  const onSubmit = async(data) => {
    await startUpdateAppointment(id, data);
    navigate('/app')
    // Aquí puedes manejar la actualización del turno
    closeModal();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.appointment}>
      <div className={styles.row}>
        <h6>Pet name</h6>
        <h3>{name}</h3>
      </div>

      <div className={styles.row}>
        <h6>Your appointment is scheduled for</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {reason && (
        <div className={styles.row}>
          <h6>Reason for consultation</h6>
          <p>{reason}</p>
        </div>
      )}

      <div className={styles.row}>
        <Button type="primary" onClick={openModal}>Edit</Button>
        <BackButton />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        background="#2c3e50"
        size={{ width: '500px', height: '400px' }}
        title="Update your appointment"
      >
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Pet Name</label>
              <input
                id="name"
                placeholder="Enter your pet name"
                {...register('name')}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="reason">Reason for Consultation</label>
              <input
                id="reason"
                placeholder="Enter the reason"
                {...register('reason')}
              />
              {errors.reason && (
                <p className={styles.error}>{errors.reason.message}</p>
              )}
            </div>

            <br/>
            <Button type="primary" htmlType="submit">Update</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
