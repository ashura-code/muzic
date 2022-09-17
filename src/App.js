import './App.css';
import React, { useState,useEffect } from 'react';


//              <<****************** App function starts here ****************>>

function App() {

  //        << ************************* JS starts here  *********************** >>


  const [Search, setSearch] = useState([]);   // search values are stored here

  const click = ()=>{
    console.log(Search);    // function for the button
  }



  

  //         << ************************* JS ends here  ************************* >>



  //      << ************************* HTML starts here  *********************** >>
  return (
    <div className="App">

      
      <h1>Muzic</h1>   {/* heading  */}

      <input 

        className="entry"
        placeholder="Search for music"                           
        type="text" value ={Search} 
        onChange={(e)=>{setSearch(e.target.value)}}>

        </input>



        <button onClick={()=>{click()}}>search</button>       {/* Music Search button */}








    </div>
    //      << ************************* HTML ends here  *********************** >>
  );
}

export default App;
