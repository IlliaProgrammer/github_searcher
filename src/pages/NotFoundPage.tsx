import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const NotFoundPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const timer  = setTimeout(() => {
            navigate("/", {replace: true})
            clearTimeout(timer)
        }, 3000)
    }, [navigate])

    return (
        <div className='mt-[200px]'>
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-white">
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold">404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal">
                        Sorry we couldn't find this page.
                    </p>
                    <p className="mb-8">
                        But don't worry, you can find plenty of other things on our homepage.
                    </p>
                </div>
                <div className="max-w-lg">
                    <img
                        className="w-[300px]"
                        src="https://media.istockphoto.com/id/1222664556/vector/cute-cartoon-cat.jpg?s=612x612&w=0&k=20&c=s80s-M0qlCqJjhfx__X1ukKlqM6U6K73rnhlEG33tSo="
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;