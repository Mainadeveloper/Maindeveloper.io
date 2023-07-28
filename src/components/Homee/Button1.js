import React from 'react';
import styles from './Button1.module.css';
const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button1} onClick={onClick}>Rent an Item Now</button>
  );
};

export default Button;
