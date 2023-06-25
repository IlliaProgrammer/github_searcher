import React from 'react';
import {FiExternalLink} from "react-icons/fi"

const LikedCard = ({ likedData }: { likedData: string }) => {
  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden p-1 sm:py-12">
      <div className="bg-gray-900 shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-1 sm:items-center justify-between px-5 py-4 rounded-md">
        <div>
          <h3 className="font-bold py-1 text-white text-center">{likedData}</h3>
        </div>
        <div>
          <a href={`https://github.com/${likedData}`} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
             GitHub <FiExternalLink className='ml-1 mt-[2px]'/>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LikedCard;