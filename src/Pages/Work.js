////import React from "react";
import React, { useState } from 'react';
import Frame59 from '../img/Frame59.png'
//import Frame54 from '../img/Frame54.svg'
//import Frame55 from '../img/Frame55.svg'
import Payment from './Payment';
import Total from './Total';
//import Total1 from './Total1';
//import Frame60 from '../img/Frame60.svg'
import Frame61 from '../img/Frame61.svg'
import Frame541 from '../img/Frame541.svg'
import Frame542 from '../img/Frame542.svg'
import TextBox from './TextBox';
import Renting from './Renting';
import SubTotal from './SubTotal';
import Duration from './Duration';
import Quantity from './Quantity';

const Work = () =>{
  const [totalQuantity, setTotalQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setTotalQuantity(newQuantity);
  };
 
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="how">How It Works</h1>
      </div> 
      <div className="laptop1">
        <h2>
          < h6>Laptop Hp:<span>Model Xhet34</span></h6>
          <h6>Color:<span>Silver</span></h6>
          <h6>Size:<span>16inch</span></h6>
        </h2>
        </div>
        <div className={Frame59}><img src={Frame59} alt="Frame59" className="Frame59" /> 
      </div>
      <div>
      <div className={Frame541}><img src={Frame541} alt="Frame541" className="Frame541" />
        </div>
        <div>
     
      <Renting price={2000} currency="ksh"  /> 
    </div>
    <div>
      <h1 className='product'>Product Quantity:</h1>
      <Quantity onChange={handleQuantityChange} />
    
    </div>
    <div>
      <Duration />
    </div>
    <div>
      <SubTotal />
    </div>
        <div>
      <p className="p1">City/Town</p>
      <TextBox />
    </div>
        </div>
        <div>
      <Payment />
    </div>
    <div>
      <Total />
    </div>
  
       <div>
       <div className={Frame542}><img src={Frame542} alt="Frame542" className="Frame542" />
        </div>
        <div className={Frame61}><img src={Frame61} alt="Frame61" className="Frame61" />
        </div>
        <div className="laptop2">
        <h2>
          < h6>Laptop Hp:<span>Model Xhet34</span></h6>
          <h6>Color:<span>Silver</span></h6>
          <h6>Size:<span>16inch</span></h6>
        </h2>
        </div>
       </div>
      </div>
    
    
  );
};

export default Work;