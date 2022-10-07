import Claims from "./Home/Claims";
import ImageSlider from "./Home/ImageSlider";
import Latest from "./Home/Lastest";
import{FaAngleLeft } from "react-icons/fa"
import Comments from "./comments/comments";
import { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
//



const Home = () => {

    useEffect(()=>{
        AOS.init(
           { duration: 400,
            easing: 'ease',
            once: false}
        );
    })
    const [toggleComment, setToggleComment] = useState(true)
    return ( 
        <main className="grid Home">
            <ImageSlider />
            <div onClick={()=>{setToggleComment(true)}} className={`comment-arrow ${toggleComment? "arrow-rotate":"arrow-rotate-back"}`}><FaAngleLeft size={30}/></div>
            <Claims/>
            <Latest toggleComment={toggleComment} setToggleComment={setToggleComment}/>
            <Comments toggleComment={toggleComment} setToggleComment={setToggleComment}/>
        </main>
     );
}
 
export default Home;