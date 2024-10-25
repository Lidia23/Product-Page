import React, { useState, useEffect } from 'react';
import { PostsList } from './PostsList';
import { Header } from '../Header';
import { getPosts } from './getPosts';
import { PostData } from './types';

export function PostPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const limit = 30;
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    let cancel = false;

    const fetchPosts = async () => {
      try {
        const { products, total } = await getPosts(currentPage, limit);
        if (!cancel) {
          setPosts(products);
          setTotalPages(Math.ceil(total / limit));
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchPosts();
    return () => {
      cancel = true;
    };
  }, [currentPage]);

  if (isLoading) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  console.log(posts);
  return (
    <>
      <Header posts={posts} onSelectCategory={setSelectedCategory} />
      <PostsList posts={filteredPosts} />
      <div className="flex justify-center mt-5">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <span className="text-sm text-gray-700 dark:text-gray-400 mt-2">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white"> {currentPage + 1}</span> of{' '}
          <span className="font-semibold text-gray-900 dark:text-white mr-3">{totalPages}</span>
        </span>
        <button
          disabled={currentPage >= totalPages - 1}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
