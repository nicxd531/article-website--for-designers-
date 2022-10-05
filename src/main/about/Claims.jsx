import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Claims = () => {
    return ( 
        <section 
        data-aos-duration="1000"
          data-aos="flip-up" 
          className="claims">
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
        className="mySwiper"
        
      >
        <SwiperSlide style={{ width:"325px"}}>
          <img src="/image/scott-graham-OQMZwNd3ThU-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width:"300px"}}>
          <img src="/image/markus-winkler-9XfSFjcwGh0-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width:"300px"}}>
          <img src="/image/scott-graham-5fNmWej4tAA-unsplash.jpg" />
        </SwiperSlide >
      </Swiper>
        </section>
     );
}
 
export default Claims;