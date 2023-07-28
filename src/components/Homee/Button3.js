import React from 'react';
import styles from './Button3.module.css';
const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button3} onClick={onClick}>How it works </button>
  );
};

export default Button;