import React from 'react';
import styles from './Text3.module.css';
function TextComponent(props) {
  return <p>{props.text}
   <div className={styles.container}>
<h1 className={styles.title1}>#Three Steps To Follow and Walaa!</h1>
</div>
  </p>;

}

export default TextComponent;