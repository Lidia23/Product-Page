import React, { useState } from 'react';

type Props = {
  content: string;
  setSearch: (value: string) => void;
};
export function Search({ content, setSearch }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative flex mr-4">
      {isVisible && (
        <input
          type="search"
          id="default-search"
          value={content}
          onChange={handleSearch}
          className={`${
            isVisible ? 'searchBoxOpen' : 'searchBoxClose'
          } -mr-3 z-30 p-2.5 text-sm font-medium text-customBlue dark:text-white bg-white hover:bg-gray-300 border-gray-700 focus:outline-none rounded-lg xs:px-2 lg:px-5 py-2.5 dark:bg-slate-800 dark:hover:bg-slate-600`}
          placeholder="Search Mockups, Logos..."
          required
        />
      )}
      <button
        type="button"
        onClick={handleVisibility}
        className="z-40 p-2.5 text-sm font-medium text-customBlue dark:text-white bg-white hover:bg-gray-300 border-gray-700  rounded-lg lg:px-5 py-2.5 dark:bg-slate-800 dark:hover:bg-slate-600"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
