import './test.css';
import React from 'react';
import ProfileData from "./Data.json";

function Test() {
  const {tester} = useParams();
  return (
    <>
     { ProfileData.map((val)=>{
        return(<>
          { (tester === val.email)?
          <>
            <h2>User Profile</h2>
            <div className='card'>
               <img src={val.image} alt="profileImage"/>
               <h2>{val.first_name} {val.last_name}</h2>
               <p>{val.email}</p>
               <p>{val.gender}</p>
               <p>My ip address is : {val.ip_address}</p>
             </div>
             </>
            :null      }
        </>)
     }
      )}
      </>
  );
}

export default Test;
