import React, { useState } from "react";
import "./searchBar.css";
import Test from "./Test";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import data from './Data.json'

function SearchBar({ placeholder, data}) {
  const [searchTerm , setSearchTerm] = useState("");

  return (
  <>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) =>{
          setSearchTerm(event.target.value)
          }
          }
        />

      </div>
        <div className="dataResult">
          {data.filter((val)=>{
              if(searchTerm===""){
              return null;
            }  else if(
                 val.email.toLowerCase().includes(searchTerm.toLowerCase()) 
              || val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
              || val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) 
                      )
                      {
                return val;
                       }
          }).map((val) => {
              return(
                 <>
               <Link to={"/test/"+val.email} style={{ textDecoration: 'none' ,color:'black'}}>
               <p>{val.first_name} {val.last_name}</p>
               </Link> 
                </>
                    )
          })}
        </div>
     </div>
    </>
  );
}

export default SearchBar;
