import { useParams } from "react-router-dom";


const BlogDetailsProject = ({data}) => {
    const {id}= useParams();
    const map = data.map((data,index)=>{
        
      index== id && console.log( "index" ,index)
       const checker= id == index 
       console.log("id" ,id)

        return(
            
                 checker && 
                <div key={data.id + index} className="blogsDetails">
                    <div>
                        <h2>{data.title}</h2>
                       {data.image && <img src={data.image} alt="blog details image"/>}
                    </div>
                    <div>
                        <div className="infoPanel info-panel2">
                                <h3>date: </h3><span>{data.date || "49 minutes ago"}</span>
                                <h3>author: </h3><span>{data.author || data.autor}</span>
                                <div>categories</div>
                                <span>{data.tags || data.Category}</span>
                        </div>
                        
                        <p>{data.article}{data.article}</p>
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
 
export default BlogDetailsProject ;