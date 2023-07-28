import React from "react";
import LIP from '../img/LIP.svg'
import Textarea from './Textarea';
import Input from './Input';
import SButton from './SButton';
import Check from './Check';
//import Textareapartition from './Textareapartition';
//import ProfilePic from "../Assets/john-doe-image.png";
//import { AiFillStar } from "react-icons/ai";
import DateTimePicker from './DateTimePicker';
import Listingimage from '../img/Listingimage.svg'
const Listing = () => {
  
  return (
    <div className="work-section-wrapper">
         <div className="textarea1">
      <h1 >Item Name</h1>
      <p>Text input fill for the renter to enter the name or title of the item</p>
      <Textarea />
      <h1>Item Description</h1>
      <p>Textarea for the renter to provide a description of the item ,including any relevant <span/>details or specification</p>
      <Textarea />
      <h1>Item Category</h1>
      <p>Inpiut Item you want to rent,Laptop,Phone,Camera etc..</p>
      <Textarea />
      <h1>Listing Price</h1>
      <p>Specify the rental price per day or per week</p>
      <Textarea />
    </div>
    <div>
    <p className="owner">Owner's Details</p>
      <Input />
    </div>
    <div className="tnc">
      <h1 className="terms">Terms and Condition</h1>
     
      <Check/>
    </div>
    <div className="App">
      <SButton/>
    </div>
    
      <div className={LIP}><img src={LIP} alt="LIP" className="LIP" />
        </div>
        <div className={Listingimage}><img src={Listingimage} alt="Listingimage" className="Listingimage" />
        </div>
      
      <div className="testimonial-section-bottom">
        
        
        <div className="testimonials-stars-container">
          </div>
        </div>
        <div className="availability">
          <h1 className="text2">Availability</h1>
          <p>Input Availability Date from when you are renting and when it should be returned back </p>
      
</div>
        <div className="available">
      <h1 className="text1">Available Date</h1>
      <DateTimePicker />
    </div>
    <div className="returning" >
      <h1 className="text1">Returning Date</h1>
      <DateTimePicker />
    </div>
    </div>
  );
};

export default Listing;