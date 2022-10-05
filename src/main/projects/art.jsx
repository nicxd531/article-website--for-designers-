import data3 from "../data/art.json"
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Link } from "react-router-dom";

const Art = ({gridToggle}) => {
    const [pageNumber, setpageNumber] = useState(0)
    const usersPerPage = 6
    const pagesVisited = pageNumber * usersPerPage
    const pageCount =Math.ceil(data3 && data3.length/usersPerPage)
    const changePage =({selected}) =>{
    setpageNumber(selected)
    }

    return ( 
        <section className="project-list grid">
            { data3.slice(pagesVisited, pagesVisited + usersPerPage).map((data, index)=>{
                        return(
                            <div 
                            key={data.title}  
                            className={`${gridToggle?"article-card-1 grid":"article-card-2"}`}
                            data-aos-duration="1000"
                            data-aos="zoom-out"
                            >
                                 <div 
                                data-aos-duration="2000"
                                data-aos="flip-left"
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
                                <button className="redirect-to-project-details"><Link to={`/projectDetails/development/${index}`}>read more</Link></button>
                                </span>
                            </div>
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
 
export default Art;