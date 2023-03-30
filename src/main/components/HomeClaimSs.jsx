import {  SwiperSlide } from "swiper/react";
const HomeClaimSs = ({data}) => {
    const map = data.map((data,index)=> {
        <img key={index} src={data.image} />
    })
    return ( 
        
          {map}
        
     );
}
 
export default HomeClaimSs;