import { PostData } from './types';
import React, { useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
type Props = {
  posts: PostData[];
};

export function PostsList({ posts }: Props) {
  const postRefs = useRef<(HTMLLIElement | null)[]>([]);

  const addVisibleClass = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target) {
        entry.target.classList.add('visible');
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(addVisibleClass, {
      threshold: 0.1,
    });

    postRefs.current.forEach((post) => {
      if (post) observer.observe(post);
    });

    return () => observer.disconnect();
  }, [posts, addVisibleClass]);

  return (
    <ul className="list-none grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-stretch mx-4">
      {posts.map((post, index) => (
        <li key={post.id} ref={(el) => (postRefs.current[index] = el)} className="post-item">
          <div className="post-card max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col transition-transform transform-gpu hover:translate-y-[-10px] hover:shadow-lg dark:hover:shadow-[0_6px_16px_rgba(255,255,255,0.25)]">
            <a
              href={`/${post.id}`}
              className="relative inline-flex justify-center items-center rounded-t-lg"
            >
              <img
                className="post-image rounded-t-lg h-auto max-w-full"
                src={post.thumbnail}
                alt={post.title}
              />
              <div className="absolute inline-flex items-center justify-center w-12 h-12 text-xs font-bold text-white bg-purple-400 dark:bg-customPurple border-2 border-white rounded-full -top-2 -right-2">
                {post.discountPercentage}%
              </div>
            </a>
            <div className="post-content p-5 flex flex-col flex-grow">
              <h5 className="max-w-full mb-2 text-2xl font-bold tracking-tight text-customBlue dark:text-white">
                {post.title}
              </h5>
              <p className="max-w-full mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.description}
              </p>
              <p className="text-customTeal flex items-center dark:text-indigo-400 mb-auto">
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
                <span className="lg:text-3xl sm:text-3xl md:text-xl font-bold text-customBlue dark:text-white">
                  ${post.price}
                </span>
                <Link
                  to={`/${post.id}`}
                  className="text-white bg-customTeal hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-700 dark:hover:bg-teal-800 dark:focus:ring-teal-900"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
