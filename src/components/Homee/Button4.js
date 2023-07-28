import React from 'react';
import styles from './Button4.module.css';
const Button = ({ text, onClick }) => {
  return (
    <button  className={styles.button4}onClick={onClick}>Browse Products </button>
  );
};

export default Button;