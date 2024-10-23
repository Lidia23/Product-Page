import { PostData } from './types';
import React from 'react';

type Props = {
  posts: PostData[];
};
export function PostsList({ posts }: Props) {
  return (
    <ul className="list-none grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
      {posts.map((post) => (
        <li key={post.id}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
            <a href="#">
              <img
                className="rounded-t-lg justify-self-center h-auto max-w-full"
                src={post.thumbnail}
                alt={post.title}
              />
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
                  width="24"
                  height="24"
                  aria-hidden="true"
                  className="mr-1 stroke-current dark:stroke-yellow-400 fill-current text-yellow-400"
                >
                  <path
                    d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>{post.rating}</span>
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${post.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
