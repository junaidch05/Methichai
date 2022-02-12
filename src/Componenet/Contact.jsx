import React from "react";
import './Contact.css';
import image from '../images/map.jpg';
function Contact() {
  return (
    <>
  
      <section className="contact" id="contacts">
      <div className="contactheading">
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
    </div>
        <div className="contact-container">
          <div className="map">
              <img src={image} alt="" className="mapimage"/>
          </div>
          <div className="address">
            <div className="location">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="socail">
              <div className="fab fa-facebook-square sicon"></div>
              <div className="fab fa-twitter sicon"></div>
             
              <div className="fas fa-envelope sicon"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
