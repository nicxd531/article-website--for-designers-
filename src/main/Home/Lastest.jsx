import web from "../data/web.json"
import print from "../data/print.json"
import art from "../data/art.json"
import photoshop from "../data/photoshop.json"
                                          
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import  { Navigation, Pagination } from 'swiper';
import LatestBg from "./latestBg";
import { Link } from "react-router-dom";






const Latest = ({articleComment,setArticleComment, setToggleComment,toggleComment}) => {
  return (  
      <section className="latest grid">   
        <div className="gridSpan12">
            <div 
            data-aos="zoom-out"
            data-aos-duration="1000" 
            >
                <h3>latest works</h3>
            </div>
        </div>
       
        <div data-aos="zoom-in"
              data-aos-duration="1000" 
              className="latest-work-slider gridSpan12 ">
        <Swiper
        slidesPerView={2}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
          { web.slice(-2).map((data,index)=>{
            return(
              <SwiperSlide style={{flexShrink:"1"}} key={index}>
                <div  className="latest-work-articles ">
                  <div  onClick={()=>setArticleComment(!articleComment)}>
                    <img src={data.image} alt="article image"/>
                  </div>
                  <div>
                    <h2>{data.title}</h2>
                    <h3>author :<span>{data.autor}</span></h3>
                    <h3>category :<span>{data.Category}</span></h3>
                    <button className="article-btn"><Link to={`/projectDetails/web/${index}`}>read more</Link> </button>
                  </div>
                </div>
                </SwiperSlide>              
            )    
          })}
          { print.slice(-2).map((data,index)=>{
            return(
              <SwiperSlide style={{flexShrink:"1",flexGrow:"0"}} key={index}>
                <div  className="latest-work-articles ">
                <div  onClick={()=>setArticleComment(!articleComment)}>
                    <img src={data.image} alt="article image"/>
                  </div>
                  <div>
                    <h2>{data.title}</h2>
                    <h3>author :<span>{data.autor}</span></h3>
                    <h3>category :<span>{data.Category}</span></h3>
                    <button className="article-btn"><Link to={`/projectDetails/print/${index}`}>read more</Link>e</button>
                  </div>
                </div>
                </SwiperSlide>
              
            )         
          })}
          { art.slice(-2).map((data,index)=>{
            return(
              <SwiperSlide style={{flexShrink:"1",flexGrow:"0"}} key={index}>
                <div  className="latest-work-articles ">
                <div  onClick={()=>setArticleComment(!articleComment)}>
                    <img src={data.image} alt="article image"/>
                  </div>
                  <div>
                    <h2>{data.title}</h2>
                    <h3>author :<span>{data.autor}</span></h3>
                    <h3>category :<span>{data.Category}</span></h3>
                    <button className="article-btn"><Link to={`/projectDetails/art/${index}`}>read more</Link></button>
                  </div>
                </div>
                </SwiperSlide>  
            )
          })}
          { photoshop.slice(-2).map((data,index)=>{
            return(
              <SwiperSlide style={{flexShrink:"1",flexGrow:"0"}} key={index}>
                <div  className="latest-work-articles ">
                <div  onClick={()=>setArticleComment(!articleComment)}>
                    <img src={data.image} alt="article image"/>
                  </div>
                  <div>
                    <h2>{data.title}</h2>
                    <h3>author :<span>{data.autor}</span></h3>
                    <h3>category :<span>{data.Category}</span></h3>
                    <button className="article-btn"> <Link to={`/projectDetails/photoshop/${index}`}>read more</Link></button>
                  </div>
                </div>
                </SwiperSlide>
            )
          })}
          </Swiper>
          </div>
          {<LatestBg articleComment={articleComment} setArticleComment={setArticleComment} toggleComment={toggleComment} setToggleComment={setToggleComment}/>}
      </section>
  );
}
 
export default Latest;