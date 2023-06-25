import React, {useState, useEffect} from 'react';
import { useDebounce } from '../hooks/debounce';
import { useSearchUserQuery } from '../store/github/github.api';
import Error from '../components/Error';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage = () => {
  const [inputVal, setInputVal] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(inputVal);
  const { isError, isLoading, data } = useSearchUserQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = () => {
    setDropdown(false);
  };

  return (
    <div className="relative z-10 flex justify-center items-center flex-col mx-auto sm:px-16 px-6">
      <div className="w-full flex justify-center items-center flex-col mt-5 sm:px-16 px-6">
        <Hero />
        {isError && <Error />}
        <div className="relative w-full sm:w-[500px] md:w-[600px] lg:w-[700px] mt-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full sm:w-64 md:w-80 lg:w-[700px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              required
            />
          </div>
          {dropdown && (
            <ul className="list-none absolute top-full left-0 right-0 sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] shadow-md bg-white overflow-y-scroll mt-2">
              {isLoading && <p>loading</p>}
              {data?.map((user) => (
                <Link key={user.id} to={`/repo/${user.login}`}>
                  <li
                    className="py-2 px-4 hover:bg-gray-400 transition-colors"
                    onClick={() => clickHandler()}
                  >
                    {user.login}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;