import React from 'react';
import styles from './Text2.module.css';
import vector1 from '../../img/vector1.png'
import computer1 from '../../img/computer1.svg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container}>
  <h1 className={styles.title1} >How to rent on Rentisha
</h1>
<p1 className={styles.title2} >Access items without owning <br/>them by renting them from <br/>people in your neighbhood in<br/> a few easy steps.</p1>
</div>
<div className={vector1}><img src={vector1} alt="vector1" className="vector1" />
</div>
<div className={computer1}><img src={computer1} alt="image2" className="image2" />
</div>
 </p>;
 }


export default TextComponent;