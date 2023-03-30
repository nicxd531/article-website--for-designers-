import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const ClaimsSs = () => {

    return ( 
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper sm-screen" 
      >     
        <SwiperSlide style={{ width:"250px"}}>
          <img src="/image/scott-graham-OQMZwNd3ThU-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width:"250px"}}>
          <img src="/image/markus-winkler-9XfSFjcwGh0-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width:"250px"}}>
          <img src="/image/scott-graham-5fNmWej4tAA-unsplash.jpg" />
        </SwiperSlide >
            </Swiper>
     );
}
 
export default ClaimsSs;