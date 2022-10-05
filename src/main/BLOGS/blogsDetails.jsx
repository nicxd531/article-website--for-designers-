import { useParams } from "react-router-dom";


const BlogDetails = ({data}) => {
    const {id}= useParams();
    const map = data.map((data)=>{
       const checker=id === data.id

        return(
            
                 checker && 
                <div key={data.id } className="blogsDetails">
                    <div>
                        <h2>{data.title}</h2>
                       {data.image && <img src={data.image} alt="blog details image"/>}
                    </div>
                    <div>
                        <div className="infoPanel info-panel2">
                                <h3>date: </h3><span>{data.date}</span>
                                <h3>author: </h3><span>{data.author}</span>
                                <div>categories</div>
                                <span>{data.tags }</span>
                        </div>
                        
                        <p>{data.article}</p>
                        <p>{data.article}</p>
                        <div>
                            <p>{data.article}</p>
                            <p>{data.article}</p>
                            <p>{data.article}</p>
                            <p>{data.article}</p>
                            <p>{data.article}</p>
                            <p>{data.article}</p>
                            <p>{data.article}</p>
                            <p>{data.article}</p>
                        </div>

                    </div>
                
                </div>
            
        )
    })

    return ( 
        <section className="span10">
          {map }
        </section>
     );
}
 
export default BlogDetails;