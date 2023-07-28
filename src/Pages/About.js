import React from "react";
import styles from './About.module.css';
//import AboutBackground from "../Assets/about-background.png";
//import AboutBackgroundImage from "../Assets/about-background-image.png";
//import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      
      <div className="about-section-text-container">
        <p className="primary-subheading">ABOUT US</p>
        
        <p className="primary-text">
        Rentisha is an innovative website platform that connects users and owners of electronic items, fashion, and footwear, enabling them to easily rent out their products to potential users at a fraction of their original cost. Our platform revolutionizes the way people access and enjoy high-quality items without the burden of ownership.
        <br/>

At Rentisha, we prioritize trust and safety. We have implemented a rigorous verification process to ensure that only genuine renters can utilize our platform, providing peace of mind to both owners and users. Our commitment to security and reliability sets us apart, fostering a community of responsible and reliable individuals.
By leveraging the sharing economy model, Rentisha promotes sustainability and conscious consumption. It allows users to access the latest electronics, fashionable items, and trendy footwear without the need for long-term ownership, reducing waste and environmental impact.
Rentisha offers a user-friendly interface, making it effortless for owners to list their products and for users to find and rent the items they desire. Our platform facilitates seamless transactions, providing a hassle-free rental experience for all parties involved.

<br/>
        </p>
        <p className="primary-text">
        Join us on our mission to redefine ownership and empower individuals to make cost-effective choices while minimizing their ecological footprint. Experience the convenience and affordability of Rentisha, where quality and affordability meet.
Unlock a world of possibilities with Rentisha. Start renting or listing your products today!

          
        </p>
       
      </div>
    </div>
  );
};

export default About;