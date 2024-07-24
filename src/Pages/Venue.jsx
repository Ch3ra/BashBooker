import React, { useEffect, useState } from "react";
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Card from "../Global/Card";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Venue = () => {

  const [data,setData]=useState([])

  const getVenue=async()=>{
    const response=await axios.get("https://react30.onrender.com/api/user/blog")
    // console.log(response);

    if (response.status===200){
      setData(response.data.data)
    }
  }

  useEffect(()=>{
    getVenue();
  },[])
  
  
  return (
    <div>
      <Navbar />
     

      <div className="flex justify-center">
        <div className="w-[300px] mt-6">
          <div className="flex items-center bg-gray-200 rounded-full shadow-md w-full">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 text-gray-800 rounded-full w-full py-2 px-4 focus:outline-none"
            />
            <button className="bg-gray-200 text-gray-600 p-2 rounded-full focus:outline-none">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
  <div className="h-20 w-16"></div>


      {/* this is the Venue Mapping Section */}

      <div className="flex mt-[-80px] justify-center space-x-10  flex-wrap mx-20">
      {data.map((a) => {
  return (
    <Link to={`/desc/${a._id}`} >
      <Card data={a} />
    </Link>
  );
})}

      


        
      </div>

      <div className="h-20 w-16"></div>

      <Footer />
      <div className="h-20 w-16"></div>
    </div>
  );
};

export default Venue;
