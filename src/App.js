import React from 'react'
import SearchBar from './SearchBar';
import {BrowserRouter as Router,Routes,Route,Link,useParams} from 'react-router-dom';


function App() {
  return (<Router>
    <div className='app'>
          </div>
           <Routes>
       <Route exact path="/" element={<SearchBar/>}/> 
      <Route exact path="/test/:tester" element={<Test/>}/> 
            </Routes>
     </Router> 
  );
}

export default App;



