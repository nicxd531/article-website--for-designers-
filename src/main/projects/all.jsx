import data from "../data/All.json"
import data2 from "../data/web.json"
import data3 from "../data/art.json"
import data4 from "../data/print.json"
import data5 from "../data/photoshop.json"
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Link } from "react-router-dom";

const All = ({gridToggle,setArticleComment,articleComment }) => {
    const [pageNumber, setpageNumber] = useState(0)
    const usersPerPage = 2
    const webl= data2.concat(data3,data4,data5)
    const pagesVisited = pageNumber * usersPerPage
    const pageCount =Math.ceil(webl && webl.length/(usersPerPage*4))
    const changePage =({selected}) =>{
    setpageNumber(selected)
    }
    
    return ( 
        <section className="project-list grid">
            {data.map(data=>{
                return(<>
                   { data.web.slice(pagesVisited, pagesVisited + usersPerPage).map((data, index)=>{
                        return(
                            <div 
                            key={data.title} 
                            className={`${gridToggle?"article-card-1 grid":"article-card-2"}`} >
                                <div onClick={()=>setArticleComment(!articleComment)}  >
                                    <img src={data.image} alt="article image"/>
                                </div>
                                <div>
                                    <h2>{data.title}</h2>
                                    <h3>{data.Category}</h3>
                                    <h3>{data.autor}</h3>
                                </div>
                                <div>
                                    <p>{data.article}</p>
                                </div>
                                <span className="btn-span">
                                <button className="redirect-to-project-details"><Link to={`/projectDetails/development/${data.id}`}>read more</Link></button>
                                </span>
                            </div>
                        )
                    })}
                   { data.print.slice(pagesVisited, pagesVisited + usersPerPage).map((data, index)=>{
                        return(
                            <div 
                            key={data.title} 
                            className={`${gridToggle?"article-card-1 grid":"article-card-2"}`} >
                                <div onClick={()=>setArticleComment(!articleComment)}
                        
                                >
                                    <img src={data.image} alt="article image"/>
                                </div>
                                <div>
                                    <h2>{data.title}</h2>
                                    <h3>{data.Category}</h3>
                                    <h3>{data.autor}</h3>
                                </div>
                                <div>
                                    <p>{data.article}</p>
                                </div>
                                <span className="btn-span">
                                <button className="redirect-to-project-details"><Link to={`/projectDetails/development/${data.id}`}>read more</Link></button>
                                </span>
                            </div>
                        )
                    })}
                   { data.art.slice(pagesVisited, pagesVisited + usersPerPage).map((data, index)=>{
                        return(
                            <div 
                            key={data.title} 
                            className={`${gridToggle?"article-card-1 grid":"article-card-2"}`} >
                                 <div onClick={()=>setArticleComment(!articleComment)}
                        
                                >
                                    <img src={data.image} alt="article image"/>
                                </div>
                                <div>
                                    <h2>{data.title}</h2>
                                    <h3>{data.Category}</h3>
                                    <h3>{data.autor}</h3>
                                </div>
                                <div>
                                    <p>{data.article}</p>
                                </div>
                                <span className="btn-span">
                                <button className="redirect-to-project-details"><Link to={`/projectDetails/development/${data.id}`}>read more</Link></button>
                                </span>
                            </div>
                        )
                    })}
                   { data.photoshop.slice(pagesVisited, pagesVisited + usersPerPage).map((data, index)=>{
                        return(
                            <div 
                            key={data.title} 
                            className={`${gridToggle?"article-card-1 grid":"article-card-2"}`}>
                                 <div onClick={()=>setArticleComment(!articleComment)} >
                                    <img src={data.image} alt="article image"/>
                                </div>
                                <div>
                                    <h2>{data.title}</h2>
                                    <h3>{data.Category}</h3>
                                    <h3>{data.autor}</h3>
                                </div>
                                <div>
                                    <p>{data.article}</p>
                                </div>
                                <span className="btn-span">
                                <button className="redirect-to-project-details"><Link to={`/projectDetails/development/${data.id}`}>read more</Link></button>
                                </span>
                            </div>
                        )
                    })}
                   </>  
                )
               
            })}
           
           <section>
            <ReactPaginate
             previousLabel={"previous"}
             nextLabel={"next"}
             pageCount={pageCount}
             onPageChange={changePage}
             previousLinkClassName={"paginationprev"}
             containerClassName={"paginationButton "}
             nextLinkClassName={"nextBttn"}
             disabledClassName={"paginationDisabled"}
             activeClassName={"paginationActive"}
             />
            </section>
        </section>
     );
}
 
export default All;