import { PostData } from './types';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  posts: PostData[];
};
export function PostsList({ posts }: Props) {
  return (
    <>
      <ul className="list-none grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch mr-4 ml-4">
        {posts.map((post) => (
          <li key={post.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
              <a href="#" className="relative inline-flex justify-center items-center">
                <img
                  className="rounded-t-lg h-auto max-w-full"
                  src={post.thumbnail}
                  alt={post.title}
                />
                <div className="absolute inline-flex items-center justify-center w-12 h-12 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
                  {post.discountPercentage}%
                </div>
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="#">
                  <h5 className="max-w-full mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                </a>
                <p className="max-w-full mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.description}
                </p>
                <p className="text-indigo-600 flex items-center dark:text-indigo-400 mb-auto">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span>{post.rating}</span>
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${post.price}
                  </span>
                  <Link
                    to={`/post/${post.id}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
