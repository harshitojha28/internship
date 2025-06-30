import requests from "./netflixaApi";
import { useState, useEffect } from "react";
import axios from "axios";

console.log(requests);
const Home = () => {
  const[netflixData,setNetflixData]=useState([]);
  console.log(netflixData);

  const getData = () =>{
    console.log("clicked");
    

  axios
  .get(requests.requestUpcoming)
  .then((res) =>setNetflixData(res.data.results))
  .catch((err) => console.log(err));
  };

   useEffect(()=>{
    getData();
   },[])



  return  (
    <>
    <button onClick={getData}
    className="bg-amber-900 text-white p-2 roundes-2x2">
       getData
    </button>
    {netflixData.map((elen)=>{
      console.log(elen);
      return(
        <>
        <div>
          <img
          className="w-full"
          src ={`https://image.tmdb.org/t/p/w500/${elen.backdrop_path}`} 
          alt="image"
          
          />
        
        </div>
        
        
        </>
      )

    })}
   
    

    

    </>
  )

};

export default Home;
