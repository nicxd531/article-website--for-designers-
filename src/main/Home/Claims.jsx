import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import{FaAngleDown } from "react-icons/fa"


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Claims = () => {
  const [toggleArticle1, setToggleArticle1] = useState(4)
  const [toggleArticle2, setToggleArticle2] = useState(5)
  const [toggleArticle3, setToggleArticle3] = useState(6)
  const p ="Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re  ut elentum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis.Aenean sodales nibh non lectus tempor a interdum justo ultricies..."
  const date="12-05-2022"
  const title="LOREM IPSUM"
  const Div = <section className="lg-screen bg-claims">
                  <div
                  data-aos-duration="1000"
                  data-aos="zoom-in" 
                  >
                    <img src="/image/scott-graham-OQMZwNd3ThU-unsplash.jpg" />
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                    <div className={toggleArticle1===1 ? "claim-article-h-f":"claim-article-h-s"}>
                      <p>{p}</p>
                    </div>
                    <div>
                    {toggleArticle1===4  && <span onMouseEnter={()=>setToggleArticle1(1)} onClick={()=>setToggleArticle1(1)}>read more</span>}
                      <FaAngleDown className={toggleArticle1 === 1 ? "rotate-arrow":"rotate-arrow2"} size={25}/>
                      {toggleArticle1=== 1 && <span  onMouseLeave={()=>setToggleArticle1(4)} onClick={()=>setToggleArticle1(4)}>read less</span>}
                    </div>
                  </div>
                  <div
                  data-aos-duration="1000"
                  data-aos="zoom-in" 
                  >
                  <img src="/image/markus-winkler-9XfSFjcwGh0-unsplash.jpg" />
                  <h2>{title}</h2>
                    <h3>{date}</h3>
                    <div className={toggleArticle2 === 2? "claim-article-h-f":"claim-article-h-s"}>
                      <p>{p}</p>
                    </div>
                    <div>
                    {toggleArticle2 === 5 && <span onMouseEnter={()=>setToggleArticle2(2)} onClick={()=>setToggleArticle2(2)}>read more</span>}
                      <FaAngleDown className={toggleArticle2 === 2 ? "rotate-arrow":"rotate-arrow2"} size={25}/>
                      {toggleArticle2 === 2 && <span  onMouseLeave={()=>setToggleArticle2(5)} onClick={()=>setToggleArticle2(5)}>read less</span>}
                    </div>
                  </div>
                  <div
                  data-aos-duration="1000"
                  data-aos="zoom-in" 
                  >
                  <img src="/image/scott-graham-5fNmWej4tAA-unsplash.jpg" />
                  <h2>{title}</h2>
                    <h3>{date}</h3>
                    <div className={toggleArticle3 === 3? "claim-article-h-f":"claim-article-h-s"}>
                      <p>{p}</p>
                    </div>
                    <div>
                    {toggleArticle3 === 6  && <span onMouseEnter={()=>setToggleArticle3(3)} onClick={()=>setToggleArticle3(3)}>read more</span>}
                      <FaAngleDown className={toggleArticle3 === 3 ? "rotate-arrow":"rotate-arrow2"} size={25}/>
                      {toggleArticle3 === 3 && <span  onMouseLeave={()=>setToggleArticle3(6)} onClick={()=>setToggleArticle3(6)}>read less</span>}
                    </div>
                  </div>
                </section>
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
      {Div}
        </section>
     );
}
 
export default Claims;