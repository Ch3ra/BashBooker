import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Global/Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const Description = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const nav = useNavigate();

    const getDescription = async () => {
        try {
            const response = await axios.get(`https://react30.onrender.com/api/user/blog/${id}`);
            if (response.status === 200) {
                setData(response.data.data);
                setLoading(false);
            }
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDescription();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    const handleDelete=async(id)=>{
        const response= await axios.delete(`https://react30.onrender.com/api/user/blog/${id}`,{
            headers:{
            'Authorization':localStorage.getItem('token')
        }
        })
        if(response.status===200){
            nav('/venue')
        }else{
            alert("Something went wrong while Deleting!")
        }
    }


    const handleEdit=()=>{
        nav(`/edit/${id}`)
    }


    



    return (
        <div>
            <Navbar />
            <div className="py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={data?.imageUrl} alt="Product Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={handleEdit}>Edit</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={()=>handleDelete(data._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <div className='flex space-x-4'>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Venue Name:</h2>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{data?.title}</h2>
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700">Venue Location:</span>
                                    <span className="text-gray-600">  {data?.subtitle}</span>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700">Booking Price:</span>
                                    <span className="text-gray-600">  {data?.category}</span>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700">Product Description:</span>
                                <p className="text-gray-600 text-sm mt-2">
                                    {data?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
