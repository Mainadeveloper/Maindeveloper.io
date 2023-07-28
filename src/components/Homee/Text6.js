import React from 'react';
import styles from './Text6.module.css';
import play1 from '../../img/play1.png'
import play2 from '../../img/play2.png'
import play from '../../img/play.svg'
import save from '../../img/save.svg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container1}>
  <h1 className={styles.title1}>Playing your part
</h1>
<p1 className={styles.p1}>Renting on Rentisha isnt just convenient and cost<br/> effective.By buying less and renting more ,youre also<br/> contributing to a circular economy,making better use of <br/>resources and helping to protect this wonderful planet we<br/> live on.</p1>
</div>
<div className={styles.container2}>
<h1 className={styles.title3} >Save money
</h1>
<p1 className={styles.p2} >Renting for a fraction of the cost</p1>
</div>
<div className={play1}><img src={play1} alt="play1" className="play1" />
</div>
<div className={play}><img src={play} alt="play" className="play" />
</div>
<div className={play2}><img src={play2} alt="play2" className="play2" />
</div>
<div className={save}><img src={save} alt="save" className="save" />
</div>
 </p>

}

export default TextComponent;