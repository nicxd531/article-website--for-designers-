import{FaAngleDown } from "react-icons/fa"
import { Link } from "react-router-dom";
import dataIn from "../data/All.json"

const Mapping1 = ({date, data,linkIn,toggleArticle, setToggleArticle, articleComment, setArticleComment}) => {

    const map =  data.slice(-2).map((data,index)=>{
        const id =data.id
        
       
        return(
            <div  
            key={index} className="latest-work-articles-bg">
                <div onClick={()=>setArticleComment(!articleComment)} >
                <img src={data.image} alt="article image"/>
                </div>
                <h2>{data.title}</h2>
                <h3>author: <span>{data.autor}</span></h3>
                <h3>category: <span>{data.Category}</span></h3>
                <h3>{date}</h3>
                <div className={toggleArticle===data.id ? "claim-article-h-f":"claim-article-h-s"}>
                <Link to={`/projectDetails/${linkIn}/${index}`}><p>{data.article}</p></Link>
                </div> 
          </div>
        )
    })
     
    return ( 
        <>
        {map}
        </>
     );
}
 
export default Mapping1;