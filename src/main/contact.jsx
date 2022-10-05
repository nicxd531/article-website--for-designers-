import ContactForm from "./contact/contactForm";
import ContactMaps from "./contact/contactMaps";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
//

const Contact = () => {

    useEffect(()=>{
        AOS.init(
           { duration: 400,
            easing: 'ease',
            once: false}
        );})
    return ( 
        <section className="contact grid" >
            <div>
                <h1>contact us</h1>
                <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo 
                nemo enim ipsam voluptatem.</p>
                <hr/>
                <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore  veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo  nemo enim ipsam voluptatem.Etiam
                    eget mi enim, non ultricies nisi voluptatem, illo inventore  veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo  nemo enim ipsam voluptatem.
                </p>
            </div>
            <ContactForm/>
            <div>
                <h1>About Blitz</h1>
                <hr/>
                <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo 
                nemo enim ipsam voluptatem.</p>
            </div>
            <ContactMaps/>
            
        </section>
     );
}
 
export default Contact;