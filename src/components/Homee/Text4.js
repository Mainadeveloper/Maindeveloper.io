import React from 'react';
import styles from './Text4.module.css';
import Vector4 from '../../img/Vector4.svg'
import person1 from '../../img/person1.svg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container}>
  <h1 className={styles.title1}>During Renting Period
</h1>
<br/>
<h2 className={styles.title2} >Enjoy your rental and return on time</h2>
<p1 className={styles.title3}>Make the most of your time with the <br/>item and then return it safely to the <br/>owner at the of the rental</p1>
<span/>
<h2 className={styles.title2}>Need more time?</h2>
<p2 className={styles.title3}>Be sure to check in with the lender and book extra days if<br/> the item is available and you want to keep t for longer.<br/>Browse items.</p2>
<br/>
</div>
{/*<div className={card1}><img src={card1} alt="card1" className="card1" />
</div>*/}
<div className={Vector4}><img src={Vector4} alt="vector3" className="vector3" />
</div>
<div className={person1}><img src={person1} alt="book1" className="book1" />
</div>
  </p>;

}

export default TextComponent;