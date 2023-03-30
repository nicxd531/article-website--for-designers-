import dataIn from "../data/All.json"
import{FaAngleDown } from "react-icons/fa"
import { Link } from "react-router-dom";
import Mapping1 from "./Mapping1";
const Map1 = ({toggleArticle, setToggleArticle, articleComment, setArticleComment}) => {
    const data = dataIn
    
    const date="12-05-2022"

    const map1 =data.map((data)=>{
        const linkWeb ="web"
        const linkPrint ="print"
        const linkArt ="art"
        const linkPhotosop ="photoshop"

        const mapDataWeb= data.web
        const mapDataPrint= data.print
        const mapDataArt= data.art
        const mapDataPhotoshop= data.photoshop

        return(
            <div className="all grid" key="all">
                    <Mapping1 date={date} data={mapDataWeb} linkIn={linkWeb} toggleArticle={toggleArticle} setToggleArticle={setToggleArticle} articleComment={articleComment} setArticleComment={setArticleComment} />
                    <Mapping1 date={date} data={mapDataPrint} linkIn={linkPrint} toggleArticle={toggleArticle} setToggleArticle={setToggleArticle} articleComment={articleComment} setArticleComment={setArticleComment} />
                    <Mapping1 date={date} data={mapDataArt} linkIn={linkArt} toggleArticle={toggleArticle} setToggleArticle={setToggleArticle} articleComment={articleComment} setArticleComment={setArticleComment} />
                    <Mapping1 date={date} data={mapDataPhotoshop} linkIn={linkPhotosop} toggleArticle={toggleArticle} setToggleArticle={setToggleArticle} articleComment={articleComment} setArticleComment={setArticleComment} />
            </div>
        )
    })

    return ( 
        <>
        {map1}
        </>
     );
}
 
export default Map1;