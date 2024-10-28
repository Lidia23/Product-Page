import React from 'react';
import { PostData } from './posts/types';
import { useState } from 'react';
import { Search } from './Search';

type Props = {
  posts: PostData[];
  onSelectCategory: (price: number, category: string, brand: string, tag: string) => void;
  searchContent: string;
  setSearch: (value: string) => void;
};

export function Header({ posts, onSelectCategory, searchContent, setSearch }: Props) {
  const uniqueCategories = Array.from(new Set(posts.map((post) => post.category)));
  const uniqueBrand = Array.from(new Set(posts.map((post) => post.brand))).filter(Boolean);
  const uniqueTag = Array.from(new Set(posts.flatMap((post) => post.tags)));
  const [drawer, setDrawer] = useState(false);
  const [price, setPrice] = useState(1000);
  const [dropDown, setDropDown] = useState<{ [key: string]: boolean }>({
    Price: false,
    Category: false,
    Brand: false,
    Tag: false,
  });

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleDropDown = (section: string) => {
    setDropDown((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setPrice(value);
    onSelectCategory(value, '', '', '');
  };

  console.log(uniqueCategories);
  return (
    <>
      <div
        className={`${drawer ? 'fixed inset-0 bg-black opacity-50 z-30 transition-transform duration-300 h-screen w-screen' : ''}`}
      ></div>
      <div className="flex text-center ml-4 mt-5 mb-5 justify-between">
        <button
          className="flex text-customBlue font-bold dark:text-white bg-white hover:bg-gray-300 border-gray-700 focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 dark:bg-slate-800 dark:hover:bg-slate-600 focus:outline-none dark:focus:ring-white transition-transform duration-300"
          type="button"
          onClick={handleDrawer}
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <svg
            className="w-6 h-6 text-customBlue dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.6"
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
            />
          </svg>
          <p>Filter</p>
        </button>
        <Search content={searchContent} setSearch={setSearch} />
      </div>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 shadow h-screen w-1/3 p-4 overflow-y-auto transition-transform ${drawer ? 'translate-x-0 ' : '-translate-x-full'} bg-white w-64 dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Filter
        </h5>
        <button
          type="button"
          onClick={handleDrawer}
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white transition-transform duration-300"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {['Price', 'Category', 'Brand', 'Tag'].map((section) => (
              <li key={section}>
                <button
                  type="button"
                  onClick={() => handleDropDown(section)}
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-300 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls={`${section}-dropdown`}
                  data-collapse-toggle={`${section}-dropdown`}
                >
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    {section}
                  </span>
                  <svg
                    className={`w-3 h-3 transform transition-transform duration-300 ${dropDown[section] ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul
                  id={`${section}-dropdown`}
                  className={`overflow-hidden mt-2 transition-max-height duration-300 ${dropDown[section] ? '' : 'hidden'}`}
                >
                  {section === 'Price' && (
                    <li>
                      <div className="flex mb-4">
                        <div className="relative justify-center">
                          <input
                            type="number"
                            id="currency-input"
                            className="block p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Enter amount"
                            value={0 || price}
                            onChange={handlePrice}
                            required
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          id="price-range-input"
                          type="range"
                          value={price}
                          min="0"
                          max="20000"
                          onChange={handlePrice}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-300 absolute start-0 -bottom-6">
                          $10
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-300 absolute end-0 -bottom-6">
                          $1500
                        </span>
                      </div>
                    </li>
                  )}
                  <div className="flex flex-wrap">
                    {section === 'Category' &&
                      uniqueCategories.map((category, index) => (
                        <li className="mt-10" key={index}>
                          <div className="flex items-center p-2">
                            <input
                              id={`filter-mobile-category-${index}`}
                              name="color[]"
                              value={category}
                              type="checkbox"
                              onChange={() => onSelectCategory(0, category, '', '')}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:text-indigo-400"
                            />
                            <label
                              htmlFor={`filter-mobile-category-${index}`}
                              className="ml-2 min-w-0 flex-1 text-gray-500 dark:text-gray-300"
                            >
                              {category}
                            </label>
                          </div>
                        </li>
                      ))}
                  </div>
                  <div className="flex flex-wrap">
                    {section === 'Brand' &&
                      uniqueBrand.map((brand, index) => (
                        <li className="mt-10" key={index}>
                          <div className="flex items-center p-2">
                            <input
                              id={`filter-mobile-brand-${index}`}
                              name="color[]"
                              value={brand}
                              type="checkbox"
                              onChange={() => onSelectCategory(0, '', brand, '')}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:text-indigo-400"
                            />
                            <label
                              htmlFor={`filter-mobile-brand-${index}`}
                              className="ml-2 min-w-0 flex-1 text-gray-500 dark:text-gray-300"
                            >
                              {brand}
                            </label>
                          </div>
                        </li>
                      ))}
                  </div>
                  <div className="flex flex-wrap">
                    {section === 'Tag' &&
                      uniqueTag.map((tags, index) => (
                        <li className="mt-10" key={index}>
                          <div className="flex items-center p-2">
                            <input
                              id={`filter-mobile-brand-${index}`}
                              name="color[]"
                              value={tags}
                              type="checkbox"
                              onChange={() => onSelectCategory(0, '', '', tags)}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:text-indigo-400"
                            />
                            <label
                              htmlFor={`filter-mobile-tag-${index}`}
                              className="ml-2 min-w-0 flex-1 text-gray-500 dark:text-gray-300"
                            >
                              {tags}
                            </label>
                          </div>
                        </li>
                      ))}
                  </div>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
