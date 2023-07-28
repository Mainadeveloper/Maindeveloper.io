import React from 'react';
import styles from './Card2.module.css';
import laptops from '../../img/laptops.svg'
import phone1 from '../../img/phone1.svg'
import shoe from '../../img/shoe.svg'
//import laptops1 from '../../img/laptops1.svg'
//import phone1 from '../../img/phone1.svg'
//import shoe1 from '../../img/shoe1.svg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container2}>
  <h1 className={styles.title2}>Explore Categories</h1>
  </div>
  <div className={styles.container1}>
  <div className={laptops}><img src={laptops} alt="laptops" className="laptops" />
        </div>
       
  <div className={phone1}><img src={phone1} alt="phone1" className="phone1" />
        </div>
       
  <div className={shoe}><img src={shoe} alt="shoe" className="shoe" />
        </div>
 
  </div>
  </p>;
}
export default TextComponent;