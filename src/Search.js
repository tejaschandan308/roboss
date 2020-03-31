import React from'react';


const Search = ({onSearchChange}) =>{
        return(
           <input type="search" placeholder="search robots" onChange={onSearchChange}/>
        );
    }

    export default Search; 