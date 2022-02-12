import React ,{useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Specials.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import image1 from "../images/sp1.jpg";
import image2 from "../images/sp2.jpg";
import image3 from "../images/sp3.jpg";
import image4 from "../images/sp4.jpg";
import image5 from "../images/sp5.jpg";
import image6 from "../images/sp6.jpg";
import image7 from "../images/sp7.jpg";
import image8 from "../images/sp8.jpg";

function Specials() {



  return (
    <>
      <section className="specials" id="specials1">
        <div className="spheading">
          <span>S</span>
          <span>P</span>
          <span>E</span>
          <span>C</span>
          <span>I</span>
          <span>A</span>
          <span>L</span>
          <span>S</span>
        </div>
        <div className="slider-container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swipenow">
              <div className="holder">
                <div className="imageholder">
                  <img src={image1} alt="" className="pic" />
                </div>
                <div className="tag">
                  <h2>Lorem, ipsum dolor.</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipenow">
              <div className="holder">
                <div className="imageholder">
                  <img src={image2} alt="" className="pic" />
                </div>
                <div className="tag">
                  <h2>Lorem, ipsum dolor.</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipenow">
              <div className="holder">
                <div className="imageholder">
                  <img src={image3} alt="" className="pic" />
                </div>
                <div className="tag">
                  <h2>Lorem, ipsum dolor.</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipenow">
              <div className="holder">
                <div className="imageholder">
                  <img src={image4} alt="" className="pic" />
                </div>
                <div className="tag">
                  <h2>Lorem, ipsum dolor.</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipenow">
              <div className="holder">
                <div className="imageholder">
                  <img src={image5} alt="" className="pic" />
                </div>
                <div className="tag">
                  <h2>Lorem, ipsum dolor.</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipenow">
              <div className="holder">
                <div className="imageholder">
                  <img src={image6} alt="" className="pic" />
                </div>
                <div className="tag">
                  <h2>Lorem, ipsum dolor.</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipenow">
              <div className="holder">
                <div className="imageholder">
                  <img src={image7} alt="" className="pic" />
                </div>
                <div className="tag">
                  <h2>Lorem, ipsum dolor.</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipenow">
              <div className="holder">
                <div className="imageholder">
                  <img src={image8} alt="" className="pic" />
                </div>
                <div className="tag">
                  <h2>Lorem, ipsum dolor.</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Specials;
