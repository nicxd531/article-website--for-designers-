import data from "../data/All.json"
import{FaAngleDown } from "react-icons/fa"
import { useState } from "react";
import { Link } from "react-router-dom";


const LatestBg = ({articleComment,setArticleComment ,setToggleComment,toggleComment}) => {
    const [toggleArticle, setToggleArticle] = useState(false);
    
    const date="12-05-2022"
    const map1 =data.map((data)=>{
        return(
            <div className="all grid" key="all">
                    {data.web.slice(-2).map((data,index)=>{
                        const id =data.id
                        const id2 = id
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
                                <Link to={`/projectDetails/web/${index}`}><p>{data.article}</p></Link>
                                </div> 
                                
                                <div>
                                {toggleArticle ===false && <span onMouseEnter={()=>setToggleArticle(id)} onClick={()=>setToggleArticle(id)}>read more</span>}
                                <FaAngleDown className={toggleArticle ===  id? "rotate-arrow":"rotate-arrow2"} size={25}/>
                                {toggleArticle === id && <span  onMouseLeave={()=>setToggleArticle(false)} onClick={()=>setToggleArticle(false)}>read less</span>}
                                </div>
                    
                          </div>
                        )
                    })}
                    {data.print.slice(-2).map((data,index)=>{
                        const id =data.id
                        const id2 = id
                        return(
                            <div  
                            key={index} className="latest-work-articles-bg">
                                <div  onClick={()=>setArticleComment(!articleComment)}>
                                <img src={data.image} alt="article image"/>
                                </div>
                                <h2>{data.title}</h2>
                                <h3>author: <span>{data.autor}</span></h3>
                                <h3>category: <span>{data.Category}</span></h3>
                                <h3>{date}</h3>
                                <div className={toggleArticle===data.id ? "claim-article-h-f":"claim-article-h-s"}>
                                <Link to={`/projectDetails/print/${index}`}><p>{data.article}</p></Link>
                                </div> 
                                
                                <div>
                                {toggleArticle ===false && <span onMouseEnter={()=>setToggleArticle(id)} onClick={()=>setToggleArticle(id)}>read more</span>}
                                <FaAngleDown className={toggleArticle ===  id? "rotate-arrow":"rotate-arrow2"} size={25}/>
                                {toggleArticle === id && <span  onMouseLeave={()=>setToggleArticle(false)} onClick={()=>setToggleArticle(false)}>read less</span>}
                                </div>
                    
                          </div>
                        )
                    })}
                    {data.art.slice(-2).map((data,index)=>{
                        const id =data.id
                        const id2 = id
                        return(
                            <div  
                            key={index} className="latest-work-articles-bg">
                                <div  onClick={()=>setArticleComment(!articleComment)}>
                                <img src={data.image} alt="article image"/>
                                </div>
                                <h2>{data.title}</h2>
                                <h3>author: <span>{data.autor}</span></h3>
                                <h3>category: <span>{data.Category}</span></h3>
                                <h3>{date}</h3>
                                <div className={toggleArticle===data.id ? "claim-article-h-f":"claim-article-h-s"}>
                                <Link to={`/projectDetails/art/${index}`}><p>{data.article}</p></Link>
                                </div> 
                                
                                <div>
                                {toggleArticle ===false && <span onMouseEnter={()=>setToggleArticle(id)} onClick={()=>setToggleArticle(id)}>read more</span>}
                                <FaAngleDown className={toggleArticle ===  id? "rotate-arrow":"rotate-arrow2"} size={25}/>
                                {toggleArticle === id && <span  onMouseLeave={()=>setToggleArticle(false)} onClick={()=>setToggleArticle(false)}>read less</span>}
                                </div>
                    
                          </div>
                        )
                    })}
                    {data.photoshop.slice(-3).map((data,index)=>{
                        const id =data.id
                        const id2 = id
                        return(
                            <div  
                            key={index} className="latest-work-articles-bg">
                                <div  onClick={()=>setArticleComment(!articleComment)}>
                                <img src={data.image} alt="article image"/>
                                </div>
                                <h2>{data.title}</h2>
                                <h3>author: <span>{data.autor}</span></h3>
                                <h3>category: <span>{data.Category}</span></h3>
                                <h3>{date}</h3>
                                <div className={toggleArticle===data.id ? "claim-article-h-f":"claim-article-h-s"}>
                                <Link to={`/projectDetails/photoshop/${index}`}><p>{data.article}</p></Link> 
                                </div> 
                                
                                <div>
                                {toggleArticle ===false && <span onMouseEnter={()=>setToggleArticle(id)} onClick={()=>setToggleArticle(id)}>read more</span>}
                                <FaAngleDown className={toggleArticle ===  id? "rotate-arrow":"rotate-arrow2"} size={25}/>
                                {toggleArticle === id && <span  onMouseLeave={()=>setToggleArticle(false)} onClick={()=>setToggleArticle(false)}>read less</span>}
                                </div>
                    
                          </div>
                        )
                    })}
            </div>
        )
    })
    return ( 
        <section className="latestBg grid">
            {map1}
        </section>
     );
}
 
export default LatestBg;