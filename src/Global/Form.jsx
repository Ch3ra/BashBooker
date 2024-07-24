import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const nav = useNavigate()
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    image: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value} = e.target;

    setData({
      ...data,
      [name]: name === 'image' ?  e.target.files[0] : value
    });
  };
  console.log(data)


  const nab= useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sub done")
    const response = await axios.post("https://react30.onrender.com/api/user/blog", data,{
        headers:{
          "Content-Type": "multipart/form-data",
          "Authorization" : localStorage.getItem('token')
          }
    })
    
    if(response.status===201){
         nab('/venue')  
    }else{
      alert("something Went Wrong")
    }
    

   
  };
  


  return (
    <>
      <Navbar />
      
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
        <form  action="#" onSubmit={handleSubmit}>
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                ADD <br />
                Venue
              </h1>
            </div>

            
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                name="image"
                placeholder="Upload Image*"
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="subtitle"
                placeholder="Location*"
                onChange={handleChange}
              />

              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="category"
                placeholder="category*"
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Description*"
                name="description"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              >
                
              </textarea>
            </div>
         
            <div className="my-2 w-1/2 lg:w-1/4">
              <button className="uppercase text-sm font-bold tracking-wide bg-black text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </div>
         </form>
        </div>
      </div>
     
    </>
  );
};

export default Form;
