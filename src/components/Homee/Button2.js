import React from 'react';
import styles from './Button2.module.css';
const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button2} onClick={onClick}>List an Item </button>
  );
};

export default Button;