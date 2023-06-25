import React, { useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const RepoCard = ({rep}: {rep: IRepo}) => {

    const {addFavourite, deleteFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.github)

    const [isFav, setIsFav] = useState(favourites.includes(rep.full_name)) 

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavourite(rep.full_name)
        setIsFav(true)
    }

    const deleteFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()  
        deleteFavourite(rep.full_name)
        setIsFav(false)
    }

    return (
        <div className="relative flex flex-col justify-center items-center overflow-hidden p-1 sm:py-12">
        <div className="bg-gray-900 shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-1 sm:items-center justify-between px-5 py-4 rounded-md">
          <div>
            <span className="text-blue-800 text-sm">Watchers: {rep.watchers}</span>
            <h3 className="font-bold py-1 text-white text-center">
              {rep.full_name} 
              {!isFav && <button onClick={addToFavourite} className="text-white"><AiOutlineHeart /></button>}
              {isFav && <button onClick={deleteFromFavourite} className="text-white"><AiFillHeart className='text-red-1000'/></button>}
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-purple-100 text-blue-700 rounded-full px-3 py-1 text-sm">{rep.language}</span>
            </div>
          </div>
          <div>
            <a href={rep.html_url} target="_blank">
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
              Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default RepoCard;