import React, { useState } from 'react';
import Navbar from './Navbar';
import pp from './../assets/pp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faRightFromBracket, faTimes } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    image: pp,
    name: 'Ch3Ray',
    email: 'banalish93@server.com',
    role: 'Admin',
    gender: 'Male',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget laoreet diam, id luctus lectus. Ut consectetur nisl ipsum, et faucibus sem finibus vitae. Maecenas aliquam dolor at dignissim commodo. Etiam a aliquam tellus, et suscipit dolor. Proin auctor nisi velit, quis aliquet sapien viverra a.'
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Profile updated:\nName: ${profile.name}\nEmail: ${profile.email}\nRole: ${profile.role}\nGender: ${profile.gender}\nDescription: ${profile.description}`);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-4">
            <img 
              src={profile.image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            <div className="flex-grow">
              <div className="flex justify-end space-x-4 mb-4">
                <FontAwesomeIcon icon={faPenToSquare} className="text-gray-600 cursor-pointer" title="Edit Profile" onClick={handleEditClick} />
                <FontAwesomeIcon icon={faRightFromBracket} className="text-gray-600 cursor-pointer" title="Logout" />
              </div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-gray-600">{profile.role}</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
              <div className="flex items-center">
                <span className="w-1/3 font-semibold text-gray-700">Name:</span>
                <input 
                  type="text"
                  value={profile.name}
                  readOnly
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
                />
              </div>
              <div className="flex items-center">
                <span className="w-1/3 font-semibold text-gray-700">Email:</span>
                <input 
                  type="text"
                  value={profile.email}
                  readOnly
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
                />
              </div>
              <div className="flex items-center">
                <span className="w-1/3 font-semibold text-gray-700">Gender:</span>
                <input 
                  type="text"
                  value={profile.gender}
                  readOnly
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
                />
              </div>
              <div className="flex items-center">
                <span className="w-1/3 font-semibold text-gray-700">Role:</span>
                <input 
                  type="text"
                  value={profile.role}
                  readOnly
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-gray-700"
                />
              </div>
            </div>

            {/* Profile Description */}
            <div className="bg-white p-4 rounded-lg shadow-md hidden md:block">
              <h3 className="text-lg font-semibold mb-2">Profile Description</h3>
              <p className="text-gray-600">
                {profile.description}
              </p>
            </div>
          </div>

          {/* Ordered Products Heading */}
          <div className='flex justify-center mt-20'>
            <h1 className="text-2xl font-bold mb-6">Ordered Products</h1>
          </div>
          <div className='flex space-x-20 flex-wrap justify-center'>
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
            {/* Product Card 3 */}
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
        </div>
      </div>

      {/* Edit Profile Form */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 bg-opacity-75 rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
            <button onClick={() => setIsEditing(false)} className="absolute top-2 right-2 text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white">Edit Profile</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300">Name:</label>
                <input 
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Email:</label>
                <input 
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Role:</label>
                <input 
                  type="text"
                  name="role"
                  value={profile.role}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Gender:</label>
                <input 
                  type="text"
                  name="gender"
                  value={profile.gender}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Description:</label>
                <textarea 
                  name="description"
                  value={profile.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
