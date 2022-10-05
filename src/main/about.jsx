import AboutUsIntro from "./about/aboutUsIntro";
import Claims from "./about/Claims";
import {useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Ceos from "./about/ceos";
//

const About = () => {

     useEffect(()=>{
        AOS.init(
           { duration: 400,
            easing: 'ease',
            once: false}
        );
    })
    return ( 
        <main className="about grid">
           <AboutUsIntro/>
           <Claims/>
           <Ceos/>
        </main>
     );
}
 
export default About;