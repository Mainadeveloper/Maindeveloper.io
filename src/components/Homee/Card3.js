import React from 'react';
import styles from './Card3.module.css';
import customer from '../../img/customer.svg'
import Frame32 from '../../img/Frame32.svg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container1}>
  <div className={Frame32}><img src={Frame32} alt="Frame32" className="Frame32" />
        </div>   
  </div> 
 <div className={styles.container}>
  <div className={customer}><img src={customer} alt="customer" className="customer" />
        </div>
        <div className={customer}><img src={customer} alt="customer" className="customer" />
        </div>    
</div> 
  </p>;

}

export default TextComponent;