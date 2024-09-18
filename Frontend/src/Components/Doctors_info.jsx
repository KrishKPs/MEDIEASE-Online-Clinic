import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';  

export function Doctors_info({ doctor }) {

  // const {doctorurl} = useParams();

  const navigate = useNavigate(); 
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-300 w-full max-w-lg grid gap">
  <div className="flex items-center space-x-4">
    <img
      className="w-24 h-24 rounded-full border-4 border-cyan-300 object-cover"
      src="/image.jpg"
      alt="Doctor"
    />
    <div className="flex flex-col justify-center w-full">
      <h2 className="text-[clamp(1rem, 2.5vw, 1.5rem)] font-semibold text-gray-800 truncate">
        {doctor.username}
      </h2>
      <p className="text-[clamp(0.75rem, 2vw, 1rem)] text-gray-600">
        Experience: {doctor.experience} years
      </p>
      <p className="text-[clamp(0.75rem, 2vw, 1rem)] text-gray-600 truncate">
        Email: {doctor.email}
      </p>
    </div>
  </div>
  <div className="mt-4 text-right">
    <button className="bg-sky-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-sky-600 transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto" 
    
    onClick={ async () => {
           
    navigate(`/appoinment/${doctor.username}`);   

    
    }}>
      Book Me
    </button>
  </div>
</div>

  );
}
