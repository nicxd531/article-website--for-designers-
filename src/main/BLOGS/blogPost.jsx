import { Link } from "react-router-dom";
import data from "../data/BlogArticles.json"
import { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "../BLOGS/blogsDetails"

const BlogPost = () => {
    const [switchToBlogDetails, setSwitchToBlogDetails] = useState(true)
    const articleMap =data.map((data)=>{
        return(
            <div key={data.title} className="main-blog-articles">
                <h1>{data.title}</h1>
                <div>
                    <img src={data.image} alt=" blog image"/>
                </div>
                <div>
                    <div className="infoPanel">
                        <h3>date: </h3><span>{data.date}</span>
                        <h3>author: </h3><span>{data.author}</span>
                        <div>categories</div>
                        <span>{data.tags}</span>
                    </div>
                    <div>
                        <div>
                            <p>{data.article}</p>
                        </div>
                        <button onClick={()=>setSwitchToBlogDetails(false)}
                        ><Link to={`/blogs/blogspost/${data.id}`} >read more</Link></button>
                    </div>
                </div>
               <hr/>

            </div>
        )
        
    })
    useEffect(() => {
        setSwitchToBlogDetails(true)
    
    }, [])
    
    return ( 
    <section className="blogArticles ">
       {switchToBlogDetails && articleMap}
      <Routes>
        <Route path="/blogspost/:id" element={<BlogDetails data={data}/>}/>
       </Routes>

    </section> 
    );
}
 
export default BlogPost;