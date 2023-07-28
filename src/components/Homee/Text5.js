import React from 'react';
import styles from './Text5.module.css';
import vector2 from '../../img/vector2.png'
import Benefits from '../../img/Benefits.svg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container}>
  <h1 className={styles.title1}>
</h1>
</div>
<div className={vector2}><img src={vector2} alt="vector2" className="vector2" />
</div>
<div className={Benefits}><img src={Benefits} alt="Benefits" className="Benefits" />
</div>
 </p>;

}

export default TextComponent;