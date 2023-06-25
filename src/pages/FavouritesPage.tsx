import React from 'react';
import LikedCard from '../components/LikedCard';
import { useAppSelector } from '../hooks/redux';

const FavouritesPage = () => {
    const {favourites} = useAppSelector(state => state.github)

    if(favourites.length === 0) return <p className='text-white font-bold mt-[150px] text-6xl text-center'>No favourites</p>

    return (
        <div className='text-center'>
            {
                favourites.map(fav => (<LikedCard likedData={fav}/>))
            }
        </div>
    );
};

export default FavouritesPage;