import React from 'react';
import styles from './Card1.module.css';
import Line4 from '../../img/Line4.svg'
import Line5 from '../../img/Line5.svg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container} >
 <div  classname={styles.cont1} >
  <h1 className={styles.title1} >1</h1>
  <h1 className={styles.title2}>Find an Item nearby
</h1>
<p1 className={styles.title3}>Search for the items you are looking for<br/>and filter by location </p1>
</div>
<div className={Line4}><img src={Line4} alt="Line4" className="Line4" />
        </div>

<div>
<h1 className={styles.title1}>2</h1>
<h1 className={styles.title2}>Request and <br/>verify
</h1>
<p1 className={styles.title3}>Send a request to the owner for the <br/> dates you'd like the items. Your <br/> booking is only confirmed when the <br/> owner accepts your request.</p1>
</div>
<div className={Line5}><img src={Line5} alt="Line5" className="Line5" />
        </div>


<div>
<h1 className={styles.title1}>3</h1>
<h1 className={styles.title2}> Arrange a pickup <br/>at Designated place <br/>Near you
</h1>
<p1 className={styles.title3}>Use chat to arrange convinient times <br/>to pick up the item and ask any <br/>questions you might have.</p1>
</div>

</div>

</p>;



}

export default TextComponent;