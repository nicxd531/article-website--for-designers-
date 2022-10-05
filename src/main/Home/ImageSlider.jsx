import data from "../data/BlogArticles.json"
import{FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import{RiRecordCircleFill } from "react-icons/ri"
import { useState, useEffect } from "react"
import ProjectLoading from "./ProjectLoading"
const ImageSlider = () => {
    const slider = data
    const [currentSlide, setcurrentSlide] = useState(0)
    const [loadingDelay , setLoadingDelay ] = useState(false)
    const autoScroll= true;
    let slideInterval;
    let intervalTime= 5000;
    const nextSlide=()=>{
        setcurrentSlide(currentSlide===slider.length-1 ? 0 : currentSlide +1)
    }
    const prevSlide=()=>{
        setcurrentSlide(currentSlide===0 ? slider.length-1 : currentSlide -1)
    }
   function auto () {
    slideInterval=setInterval(nextSlide, intervalTime)
   }

   useEffect(()=>{
    setcurrentSlide(0)
        const timer= setTimeout(()=>{setLoadingDelay(true)}, 3000)
    },[])
     useEffect(()=>{
            setcurrentSlide(0)
    },[])
    
        useEffect(()=>{
           if (autoScroll) {
            auto()
           }
           return() => {clearInterval(slideInterval)}
        },[currentSlide])
    return (
        <section
            data-aos-duration="1000"
            data-aos="fade-up" 
            className="image-slider">
            {loadingDelay=== false && <ProjectLoading/>}
            {loadingDelay && slider.map((data, index) => {
                return (
                    <div className={`main-image ${currentSlide==index ? "current": null}`} key={index} >
                        <img src={data.image} alt="image slider popular content"/>
                        <div className={ `${currentSlide==index ? "currentI": "currentI2"}`}>
                            <h3>{data.title}</h3>
                            <p>{data.article}</p>
                        </div>
                    </div>
                )
            })}
            <FaAngleDoubleLeft onClick={()=>{prevSlide()}} className="main-img-arr-1" size={20}></FaAngleDoubleLeft>
            <FaAngleDoubleRight onClick={()=>{nextSlide()}}  className="main-img-arr-2" size={20}></FaAngleDoubleRight>
            <div className="image-radio-btn">
                {slider && slider.map((data,index)=>{
                    return(
                        <RiRecordCircleFill onClick={()=>{setcurrentSlide(index)}} key={index}></RiRecordCircleFill>
                    )
                })}
            </div>
        </section>
    );
}

export default ImageSlider;