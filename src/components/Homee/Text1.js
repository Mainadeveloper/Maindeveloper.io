import React from 'react';
import styles from './Text1.module.css';
import image1 from '../../img/image1.jpeg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container}>
  <h1 className={styles.title1}>Rent Anything <br/>from People near<br/>your area <span className={styles.title4}>Fast</span>
  </h1>
<p1 className={styles.title2} >Borrow almost anything from people<br/>nearby, for job at home, fun experiences or<br/> work.</p1>
<h2 className={styles.title3} >We Will <span className={styles.title5}>Deliver</span></h2>
</div> 
<div className={image1}><img src={image1} alt="image1" className="image1" />
</div>
</p>

;
}

export default TextComponent;