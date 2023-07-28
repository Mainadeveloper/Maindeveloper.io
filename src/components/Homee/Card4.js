import React from 'react';
import styles from './Card4.module.css';
import instagram1 from '../../img/instagram1.svg'
import facebook1 from '../../img/facebook1.svg'
import twitter1 from '../../img/twitter1.svg'
function TextComponent(props) {
  return <p>{props.text}
  <div className={styles.container}>
<h3 className={styles.title1}>log in or sign up <br/> How it Works <br/> Social Media</h3>

<h3 className={styles.title2}>FAQ <br/> Browse Items <br/> Picking Location</h3>

<h3 className={styles.title3}>Privacy & Policy <br/> Terms of Service</h3>

</div>
<a href="https://www.instagram.com/your_instagram_profile/">
<div className={instagram1}><img src={instagram1} alt="instagram1" className="instagram1" />
        </div> 
        </a>  
        <a href="https://www.facebook.com/your_facebook_profile_or_page/"> 
 <div className={facebook1}><img src={facebook1} alt="facebook1" className="facebook1" />
        </div> 
        </a>
        <a href="https://twitter.com/your_twitter_profile_or_tweet_url">
<div className={twitter1}><img src={twitter1} alt="twitter1" className="twitter1" />
        </div>   
        </a>          
</p>;
}
export default TextComponent;