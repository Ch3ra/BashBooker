import React, { useState } from 'react';
import Navbar from './Navbar';
import pp from './../assets/pp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faRightFromBracket, faTimes } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditPopup = () => {
    setIsEditing(!isEditing);

    
  };



  // From here the Editing section is Going

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-4">
            <img 
              src={pp}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            <div className="flex-grow">
              <div className="flex justify-end space-x-4 mb-4">
                <FontAwesomeIcon icon={faPenToSquare} className="text-gray-600 cursor-pointer" title="Edit Profile" onClick={toggleEditPopup} />
                <FontAwesomeIcon icon={faRightFromBracket} className="text-gray-600 cursor-pointer" title="Logout" />
              </div>
              <h2 className="text-2xl font-bold">Alish Ban</h2>
              <p className="text-gray-600">Admin</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
              <div className="flex items-center">
                <span className="w-1/3 font-semibold text-gray-700">Name:</span>
                <input 
                  type="text"
                  value="Ch3Ray"
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
                />
              </div>
              <div className="flex items-center">
                <span className="w-1/3 font-semibold text-gray-700">Email:</span>
                <input 
                  type="text"
                  value="banalish93@gmail.com"
                  readOnly
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
                />
              </div>
              <div className="flex items-center">
                <span className="w-1/3 font-semibold text-gray-700">Gender:</span>
                <input 
                  type="text"
                  value="Male"
                  readOnly
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
                />
              </div>
              <div className="flex items-center">
                <span className="w-1/3 font-semibold text-gray-700">Role:</span>
                <input 
                  type="text"
                  value="Admin"
                  readOnly
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
                />
              </div>
            </div>

            {/* Profile Description */}
            <div className="bg-white p-4 rounded-lg shadow-md hidden md:block">
              <h3 className="text-lg font-semibold mb-2">Profile Description</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, repudiandae necessitatibus harum illo reiciendis neque et illum nesciunt, corrupti voluptatibus minus excepturi debitis quaerat ipsum iure quas modi dolores saepe.
              </p>
            </div>
          </div>

          {/* Ordered Products Heading */}
          <div className="flex justify-center mt-20">
            <h1 className="text-2xl font-bold mb-6">Ordered Products</h1>
          </div>
          <div className="flex space-x-20 flex-wrap justify-center">
            {/* Product Card 1 */}
            <div className="block rounded-lg bg-white w-72 mt-6 shadow-lg">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-lg w-full h-64 object-cover"
                  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720"
                  alt="Venue"
                />
                <a href="#!">
                  <div className="absolute inset-0 bg-[hsla(0,0%,98%,0.15)] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h5 className="text-sm font-bold text-gray-800">
                    Location Name
                  </h5>
                  <div className="flex items-center">
                    <h5 className="text-sm font-bold text-gray-800 mr-1">5.0</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Lorem ipsum, dolor sit amet consectetur rspiciatis ullam accusamus! Libero doloremque sed sit error beatae. Sed natus explicabo totam.
                </p>
                <p className="text-base mb-4">
                  Date Range - Owner
                </p>
                <h5 className="text-sm font-bold text-gray-800">
                  Price per night
                </h5>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="block rounded-lg bg-white w-72 mt-6 shadow-lg">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-lg w-full h-64 object-cover"
                  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720"
                  alt="Venue"
                />
                <a href="#!">
                  <div className="absolute inset-0 bg-[hsla(0,0%,98%,0.15)] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h5 className="text-sm font-bold text-gray-800">
                    Location Name
                  </h5>
                  <div className="flex items-center">
                    <h5 className="text-sm font-bold text-gray-800 mr-1">5.0</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Lorem ipsum, dolor sit amet consectetur rspiciatis ullam accusamus! Libero doloremque sed sit error beatae. Sed natus explicabo totam.
                </p>
                <p className="text-base mb-4">
                  Date Range - Owner
                </p>
                <h5 className="text-sm font-bold text-gray-800">
                  Price per night
                </h5>
              </div>
            </div>
          </div>

          {/* Popup Form */}
          {isEditing && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div 
      className="p-8 rounded-lg shadow-lg relative" 
      style={{ width: '40rem', backgroundColor: 'rgba(128, 128, 128, 0.8)' }} // Grey background with transparency
    >
      <FontAwesomeIcon
        icon={faTimes}
        className="absolute top-4 right-4 text-white cursor-pointer" // Changed text color to white
        onClick={toggleEditPopup}
      />
      <h3 className="text-lg font-semibold mb-4 text-white">Edit Profile</h3> {/* Changed text color to white */}
      <form className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-white">Image</label> {/* Changed text color to white */}
            <input type="file" className="border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-900" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-white">Name</label> {/* Changed text color to white */}
            <input type="text" className="border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-900" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-white">Email</label> {/* Changed text color to white */}
          <input type="email" readOnly className="border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-900" />
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-white">Role</label> {/* Changed text color to white */}
            <input type="text" readOnly className="border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-900" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-white">Gender</label> {/* Changed text color to white */}
            <input type="text" readOnly className="border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-900" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-white">Contact Number</label> {/* Changed text color to white */}
          <input type="text" placeholder="Enter contact number" className="border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-900" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-white">Description</label> {/* Changed text color to white */}
          <textarea className="border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-900" rows="4" placeholder="Enter description"></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={toggleEditPopup}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}




        </div>
      </div>
    </div>
  );
}

export default Profile;
