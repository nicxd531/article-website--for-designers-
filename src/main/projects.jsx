import { Route,Routes,Link } from "react-router-dom";
import All from "./projects/all";
import Art from "./projects/art";
import Development from "./projects/development";
import Photoshop from "./projects/photoshop";
import Print from "./projects/print";
import Web from "./projects/web";
import { useState,useEffect } from "react";
import{FaAngleLeft } from "react-icons/fa"
import{BsGridFill ,BsViewList} from "react-icons/bs"
import Comments from "./comments/comments";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
//


const Projects = ({ articleComment,setArticleComment}) => {
    const [gridToggle, setGridToggle] = useState(false)
    const [toggleComment, setToggleComment] = useState(false)
    useEffect(()=>{
        AOS.init(
           { duration: 400,
            easing: 'ease',
            once: false}
        );
    })
    return ( 
        <section className="projects grid">
            <div>
            <h1>projects</h1>
                <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo 
                nemo enim ipsam voluptatem.</p>
                <hr/>
            </div>
            <div className="project-nav">
                <Link to={"/projects/"}>ALL</Link>
                <hr/>
                <Link to={"/projects/web"}>WEB</Link>
                <hr/>
                <Link to={"/projects/print"}>PRINT</Link>
                <hr/>
                <Link to={"/projects/art"}>ART</Link>
                <hr/>
                <Link to={"/projects/photoshop"}>PHOTOSHOP</Link>
                <hr/>
                <Link to={"/projects/development"}>DEVELOPMENT</Link>
               
            </div>
            <Routes>
                <Route path="" element={<All articleComment={articleComment} setArticleComment={setArticleComment}  gridToggle={gridToggle}/>}/>
                <Route path="/web" element={<Web articleComment={articleComment} setArticleComment={setArticleComment}    gridToggle={gridToggle}/>}/>
                <Route path="/print" element={<Print toggleComment={toggleComment} setToggleComment={setToggleComment}  gridToggle={gridToggle}/>}/>
                <Route path="/art" element={<Art articleComment={articleComment} setArticleComment={setArticleComment}  gridToggle={gridToggle}/>}/>
                <Route path="/photoshop" element={<Photoshop articleComment={articleComment} setArticleComment={setArticleComment}  gridToggle={gridToggle}/>}/>
                <Route path="/development" element={<Development articleComment={articleComment} setArticleComment={setArticleComment} gridToggle={gridToggle}/>}/>
            </Routes>
            <div className="grid-toggle">
                <div>
                    <BsGridFill onClick={()=>setGridToggle(true)} size={16}/>
                    <BsViewList onClick={()=>setGridToggle(false)} size={16}/>
                    <div className={`${gridToggle?"grid-toggle-move-right":"grid-toggle-move-left"}`}></div>
                </div>
            </div>
            <div onClick={()=>{setToggleComment(true)}} className={`comment-arrow ${toggleComment? "arrow-rotate":"arrow-rotate-back"}`}><FaAngleLeft size={30}/></div>
            <Comments articleComment={articleComment} setArticleComment={setArticleComment} toggleComment={toggleComment} setToggleComment={setToggleComment}/>
        </section>
     );
}
 
export default Projects;