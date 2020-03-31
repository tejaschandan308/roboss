import React from 'react';
import Card from './Card';

const CardList= ({robots})=>{
   const cardlooplist=robots.map((user,i)=>{

    return(
        <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    )
   })

return(
    <div>
        {cardlooplist}
    </div>
  
);
}

export default CardList;