import SliderCard from "./SliderCards";
import "./style/ClubSlider.css";
// import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper";

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
        loop={true}
        autoplay={{
        delay: 3000, // autoplay delay in milliseconds
        disableOnInteraction: false // autoplay continues even when user interacts with swiper
      }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
            <h2>No Club found</h2>
          </div>)
}
        
      </Swiper>
    </>
 </div>
 );
}
 
export default ClubSlider;