import{ FaAngleRight } from "react-icons/fa"
import {useState,useRef, useEffect} from "react"
import MainComment from "./mainComment";


const Comments = (props) => {  
    const ref =useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
         if(ref.current && !ref.current.contains(event.target)){props.setToggleComment(false)}
         
        }
        document.addEventListener("mousedown",handleClickOutside);
        return()=>{
         document.removeEventListener("mousedown",handleClickOutside);
        };
      
     }, [ref]) 
    return ( 
        <section ref={ref} className={`comments ${props.toggleComment?"show-comment":"hide-comment"}`} >
            <div>
                <div className="comments-header">
                    <div>
                        <h2>comments</h2>
                    </div>
                </div>
            </div>
            
           { !props.articleComment && <div className="comments-container">
                <div 
                data-aos="flip-up"
                data-aos-duration="1000" 
                className="comments-container-info"
                >
                    <div>
                        <h3>click article image</h3>
                        <h3> for comments</h3>
                    </div>
                </div>
            </div>}
           { props.articleComment && <MainComment currentUserId="1"/> }
           <div className="scroll-for-more">
                <hr/>
                <h2>scroll for more</h2>
            </div>  
            <div onClick={()=>{props.setToggleComment(false)}}  className={`comment-arrow-2 ${props.toggleComment? "arrow-rotate-back":"arrow-rotate"}`}><FaAngleRight size={30}/></div>
        </section>
     );
}
 
export default Comments;
