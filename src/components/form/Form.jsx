import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./Form.module.css";
import { Button } from '../button/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BackButton } from '../button/BackButton';
import { useAppointments } from '../../context/AppointmentContext';

// Esquema de validación usando Zod
const schema = z.object({
  name: z.string().min(1, "City name is required"),
  date: z.string().min(1, "Date is required"),
  notes: z.string().min(10, "Reason for consultation must be at least 10 characters long"),
});

export const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const medicName = decodeURIComponent(searchParams.get('medic'));
  const pet_type = decodeURIComponent(searchParams.get('pet_type'));
  const { createAppointment, isLoading } = useAppointments();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      date: "",
      notes: "",
    },
  });

  // Función para manejar el envío del formulario
  const onSubmit = async (data) => {
    // Aquí podrías hacer algo con los datos del formulario
    if(!medicName){
      alert("Please select a doctor")
      return
    }

    if(!pet_type){
      alert("Please select a pet type")
      return
    } 

    const dataToSend = {
      ...data,
      pet_type: pet_type,
      medic: medicName,
    };
    
    await createAppointment(dataToSend)
    reset();
    navigate("/app")
    
  };

  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ''}`} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name")}
        />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When do you want the appointment?</label>
        <input
          id="date"
          type="date"
          {...register("date")}
        />
        {errors.date && <span className={styles.error}>{errors.date.message}</span>}
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Reason for consultation</label>
        <textarea
          id="notes"
          {...register("notes")}
        />
        {errors.notes && <span className={styles.error}>{errors.notes.message}</span>}
      </div>

      <div className={styles.buttons}>
        <Button type="primary">
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
};
