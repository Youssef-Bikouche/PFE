import SliderCard from "./SliderCards";
import "./style/ClubSlider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay,EffectCoverflow } from "swiper";

const ClubSlider = ({props}) => {
 return (  
 <div className="ClubSlide">
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
       
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          depth: 100,    
        }}
        modules={[Autoplay, EffectCoverflow]}
      >
        {props?.length > 0 ? (
          <div className="ClubSlider">
            {props.map((Club) => (
              <SwiperSlide>
                  <SliderCard props={Club}/>
              </SwiperSlide>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2 style={{color:'white'}}>No Club found</h2>
          </div>)
}
        
      </Swiper>
    </>
 </div>
 );
}
 
export default ClubSlider;