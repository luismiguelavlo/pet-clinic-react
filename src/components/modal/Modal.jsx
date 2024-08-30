import React from 'react';
import styles from './Modal.module.css';

export const Modal = ({ isOpen, onClose, children, background, size, title }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} style={{ background: background, ...size }}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// Subcomponentes opcionales para el compound component
Modal.Header = ({ children }) => <div className={styles.modalHeader}>{children}</div>;
Modal.Body = ({ children }) => <div className={styles.modalBody}>{children}</div>;
Modal.Footer = ({ children }) => <div className={styles.modalFooter}>{children}</div>;
