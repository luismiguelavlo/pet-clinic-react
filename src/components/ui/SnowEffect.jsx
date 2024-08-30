import React, { useEffect, useRef } from 'react';
import styles from './SnowEffect.module.css';

const SnowEffect = () => {
    const snowContainerRef = useRef(null);
    const snowflakeProbability = 0.1; // Probabilidad de que aparezca un copo de nieve (20%)

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Generar un número aleatorio entre 0 y 1
            const random = Math.random();

            // Solo crear un copo de nieve si el número aleatorio es menor que la probabilidad
            if (random < snowflakeProbability) {
                createSnowflake(e.pageX, e.pageY);
            }
        };

        const createSnowflake = (x, y) => {
          const snowContainer = snowContainerRef.current;
          const snowflake = document.createElement('div');
          snowflake.classList.add(styles.snowflake);
          
          // Asegúrate de que el copo de nieve esté dentro de la ventana
          const maxWidth = window.innerWidth - 20; // Ajusta 20px por el tamaño del copo
          const maxHeight = window.innerHeight - 20;
          const safeX = Math.min(x, maxWidth);
          const safeY = Math.min(y, maxHeight);
      
          snowflake.style.left = `${safeX}px`;
          snowflake.style.top = `${safeY}px`;
          snowflake.style.animationDuration = `${Math.random() * 8 + 2}s`;
          snowflake.style.opacity = Math.random();
      
          snowContainer.appendChild(snowflake);
      
          setTimeout(() => {
              snowflake.remove();
          }, 5000);
      };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className={styles.snowContainer} ref={snowContainerRef}></div>;
};

export default SnowEffect;
