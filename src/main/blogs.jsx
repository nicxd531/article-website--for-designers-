import BlogPost from "./BLOGS/blogPost";
import Comments from "./comments/comments";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useState,useEffect } from "react";
import{FaAngleLeft } from "react-icons/fa"

const Blogs = ({}) => {
    const [toggleComment, setToggleComment] = useState(false)
    useEffect(()=>{
        AOS.init(
           { duration: 400,
            easing: 'ease',
            once: false}
        );
    })

    return ( 
        <section className="blogs grid">
            <div>
                <h1>Blogs</h1>
                <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo 
                nemo enim ipsam voluptatem.</p>
                <hr/>
            </div>
            <BlogPost/>
            <div onClick={()=>{setToggleComment(true)}} className={`comment-arrow ${toggleComment? "arrow-rotate":"arrow-rotate-back"}`}><FaAngleLeft size={30}/></div>
            <Comments toggleComment={toggleComment} setToggleComment={setToggleComment}/>
            <div className="about-blitz">
                <h2>About Blitz</h2>
                <hr/>
                <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo 
                    nemo enim ipsam voluptatem.</p>
            </div>

        </section>
     );
}
 
export default Blogs;