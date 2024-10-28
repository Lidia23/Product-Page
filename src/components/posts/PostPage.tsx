import React, { useState, useEffect, useRef } from 'react';
import { PostsList } from './PostsList';
import { Header } from '../Header';
import { getPosts } from './getPosts';
import { PostData } from './types';

export function PostPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number>(1000);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [productsPerPage] = useState(30);
  const postPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancel = false;

    const fetchPosts = async () => {
      try {
        const { products } = await getPosts(0);
        if (!cancel) {
          setPosts(products);
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
  if (postPageRef.current) {
    postPageRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  if (isLoading) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }
  const handleSelectCategory = (
    price?: number,
    category?: string,
    brand?: string,
    tag?: string,
  ) => {
    if (price) {
      setSelectedPrice(price);
    }
    if (!price) {
      setSelectedPrice(1000);
    }
    if (category) {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
      );
    }
    if (brand) {
      setSelectedBrands((prev) =>
        prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
      );
    }
    if (tag) {
      setSelectedTag((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
      );
    }
    setCurrentPage(0);
  };
  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategories.length === 0 || selectedCategories.includes(post.category)) &&
      (selectedBrands.length === 0 || selectedBrands.includes(post.brand)) &&
      (selectedTag.length === 0 || post.tags.some((tag) => selectedTag.includes(tag))) &&
      (selectedPrice === 1000 || post.price <= selectedPrice) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);
  const totalFilteredPages = Math.ceil(filteredPosts.length / productsPerPage);

  return (
    <div id="postPage" ref={postPageRef}>
      <Header
        posts={posts}
        onSelectCategory={handleSelectCategory}
        searchContent={searchTerm}
        setSearch={setSearchTerm}
      />
      <PostsList posts={currentPosts} />
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <span className="text-sm text-gray-700 dark:text-gray-400 mt-2">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white"> {currentPage + 1}</span> of{' '}
          <span className="font-semibold text-gray-900 dark:text-white mr-3">
            {totalFilteredPages}
          </span>
        </span>
        <button
          disabled={currentPage >= totalFilteredPages - 1}
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
