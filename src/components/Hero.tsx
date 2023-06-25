import React from 'react';
import {FiExternalLink} from "react-icons/fi"

const Hero = () => {
    return (
        <section className="bg-gray-900 text-white w-full border rounded-xl">
        <div className="mx-auto max-w-screen-xl px-4 py-[100px] lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mb-2">
              GitHub Searcher App.
              <span className="sm:block"> Find your profile. </span>
            </h1>
      
            <p className=" mt-5 max-w-xl sm:text-xl/relaxed ">
              This website was created to find GitHub accounts and display their repositories. The Github api was used.
            </p>
      
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto flex"
                href="https://github.com/IlliaProgrammer"
                target="_blank"
              >
                My GitHub <FiExternalLink className='ml-1 mt-[2px]'/>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;