import React from 'react';

const Card= ({id,name,email})=>{

    return(
        <div className=" tc bg-light-green dib br3 ma2 pa2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200*200"`} alt="photo"/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
         
        </div>
    );
}
 export default Card; 

 


