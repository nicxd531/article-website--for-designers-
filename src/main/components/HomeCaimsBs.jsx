import { useState } from "react";
import{FaAngleDown } from "react-icons/fa"
import React from "react";

const HomeClaimsBs = ({data}) => {
    const mapHomeClaims =data.map(data =>{
                      return ( 
                      <div key={data.id}>
                            <img src={data.image} />
                            <h2>{data.title}</h2>
                            <h3>{data.date}</h3>
                            <div>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        )
    })
    return ( 
        <React.Fragment>
            {mapHomeClaims}
        </React.Fragment>
     );
}
 
export default HomeClaimsBs;