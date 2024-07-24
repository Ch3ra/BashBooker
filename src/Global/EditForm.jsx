import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditForm = () => {
  const { id } = useParams();

  const [singleData, setSingleData] = useState({})

  const nav = useNavigate();
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    image: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sub triggered!");

    const response = await axios.patch(
      `https://react30.onrender.com/api/user/blog/${id}`,
      {
        title: data.title,
        image: data.image,
        description: data.description,
        subtitle: data.subtitle,
        category: data.category,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization" : localStorage.getItem('token')
        },
      }
    );
    if (response.status === 200) {
      nav(`/desc/${id}`);
    } else {
      console.log("Smoething went wrong while editing");
    }
  };

  const handleEdit = async () => {
    const response = await axios.get(
      `https://react30.onrender.com/api/user/blog/${id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (response.status === 200) {
      setData(response.data.data);
    }
  };


  useEffect(() => {
    handleEdit();
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <form action="#" onSubmit={handleSubmit}>
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Edit <br />
                  Venue
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="file"
                  name="image"
                  // value={data?.image}
                  placeholder="Upload Image*"
                  onChange={handleChange}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  placeholder="Name*"
                  defaultValue={singleData?.title}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="subtitle"
                  value={data?.subtitle}
                  placeholder="Location*"
                  onChange={handleChange}
                  defaultValue={singleData?.subtitle}

                />

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="category"
                  value={data?.category}
                  placeholder="category*"
                  onChange={handleChange}
                  defaultValue={singleData?.category}

                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Description*"
                  name="description"
                  value={data?.description}
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                  defaultValue={singleData?.description}

                ></textarea>
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

export default EditForm;
