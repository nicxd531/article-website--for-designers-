import BlogDetailsProject from "./BlogDetailsProject ";

const ProjectDetails = ({data,setArticleComment,articleComment }) => {
    return (
        <section className="projectDetails grid">
            <div>
            <h1>projects</h1>
                <p>Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo 
                nemo enim ipsam voluptatem.</p>
                <hr/>
            </div>
            <BlogDetailsProject articleComment={articleComment} setArticleComment={setArticleComment} data={data}/>
            
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
 
export default ProjectDetails;