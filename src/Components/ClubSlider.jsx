import SliderCard from "./SliderCards";
import "./style/ClubSlider.css";
// import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { Swiper, SwiperSlide } from "swiper/react";

import {  Autoplay,EffectCoverflow, Pagination, Navigation  } from "swiper";

const ClubSlider = ({props}) => {
 return (  
 <div className="ClubSlide">
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
       
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow,Pagination, Navigation]}
        className="mySwiper"
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