import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./Form.module.css";
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';

// Esquema de validación usando Zod
const schema = z.object({
  name: z.string().min(1, "City name is required"),
  date: z.string().min(1, "Date is required"),
  notes: z.string().min(10, "Reason for consultation must be at least 10 characters long"),
});

export const Form = () => {
  const navigate = useNavigate()

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
  const onSubmit = (data) => {
    // Aquí podrías hacer algo con los datos del formulario
    console.log(data);
    
    // Reiniciar el formulario después del envío exitoso
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="back" onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }}>
        &larr; Back
        </Button>
      </div>
    </form>
  );
};
