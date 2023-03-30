import data7 from "../data/claims.json"
import HomeClaimsBs from "../components/HomeCaimsBs"
import React from "react"


const ClaimsBs = ({data,loading}) => {
    
  !loading && console.log(data.claims.data)
    const disData = 
    <section className="lg-screen bg-claims">
    {!loading && data.claims.data.map((data,index)=>{
        return(
            
            <div key={index}>
                <img src={data.attributes.images} />
                <h2>{data.attributes.title}</h2>
                <h3>{data.attributes.date}</h3>
                <div>
                    <p>{data.attributes.description}</p>
                </div>
            </div>
            
        )
    })}
    </section>
    
    
    return ( 
        <>
            {disData}
        </>
     );
}
 
export default ClaimsBs;