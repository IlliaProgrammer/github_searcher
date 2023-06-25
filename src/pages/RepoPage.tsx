import React, { useEffect } from 'react';
import RepoCard from '../components/RepoCard';
import { useParams } from 'react-router';
import { useLazyGetUserReposQuery } from '../store/github/github.api';

const RepoPage = () => {
    const { id } = useParams()
    console.log(id)
    const  [fetch, {isLoading: isReposing, data: repos}] = useLazyGetUserReposQuery()

    useEffect(()=>{
        fetch(id)
    }, [])
    
    return (
        <div className='mt-[20px]'>
            {isReposing && <p>Loading</p>}
            {repos?.map(rep => <RepoCard rep={rep} key={rep.id} />)}
        </div>
    );
};

export default RepoPage;