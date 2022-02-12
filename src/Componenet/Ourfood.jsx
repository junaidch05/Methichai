import React from "react";
import "./Ourfood.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";

import image1 from "../images/pro1.jpeg";
import image2 from "../images/pro2.jpeg";
import image3 from "../images/pro3.jpeg";
import image4 from "../images/pro4.jpeg";
import image5 from "../images/pro5.jpeg";
import image6 from "../images/pro6.jpeg";
import image7 from "../images/pro7.jpeg";
import image8 from "../images/pro8.jpeg";
import image9 from "../images/pro9.jpeg";
import image10 from "../images/pro10.jpeg";
import image11 from "../images/pro11.jpeg";
import image12 from "../images/pro12.jpg";
function Ourfood() {
  return (
    <>
      <section className="ourfood" id="ourfoods">
        <div className="mheading">
          <span>O</span>
          <span>U</span>
          <span>R</span>
        
          <span>F</span>
          <span>O</span>
          <span>O</span>
          <span>D</span>
        </div>
        <div className="container">
          <Swiper
            spaceBetween={30}
            effect={"cube"}
            
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="first">
                <div className="one">
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image1} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image2} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                </div>
                <div className="one">
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image3} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image4} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="first">
                <div className="one">
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image5} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image6} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                </div>
                <div className="one">
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image7} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image8} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="first">
                <div className="one">
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image9} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image10} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                </div>
                <div className="one">
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image11} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                  <div className="main-container">
                    <div className="mainimg">
                      <img src={image12} alt="" className="pros" />
                    </div>
                    <div className="maintag">
                      <h3>Lorem ipsum.</h3>
                      <p>-/XXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Ourfood;
