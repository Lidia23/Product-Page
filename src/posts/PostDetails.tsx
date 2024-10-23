import React from 'react';
import { PostData } from './types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function PostDetails() {
  const [post, setPost] = useState<PostData>();
  const { postId } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      if (!post && postId) {
        try {
          const apiUrl = `${process.env.REACT_APP_API_URL}/${postId}`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      }
    };

    fetchPost();
  }, [postId, post]);
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
            <img
              src={post.images}
              alt={post.title}
              className="max-lg:mx-auto rounded-2xl object-cover"
            />
            <div className="w-full flex justify-items-center mt-4">
              <table className="w-full text-center text-sm text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr>
                    <th className="px-4 py-2 justify-items-center">
                      <svg
                        className="w-[31px] h-[31px] text-gray-800 dark:text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.7"
                          d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3.073.661 2.467 2.8 5 2.8M5 8c3.359 0 2.192-2.115 5.012-2.793M7 9.556V7.75m0 1.806-1.95 4.393a.773.773 0 0 0 .37.962.785.785 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.776.776 0 0 0 .09-.716L7 9.556Zm10 0V7.313m0 2.243-1.95 4.393a.773.773 0 0 0 .37.962.786.786 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.775.775 0 0 0 .09-.716L17 9.556Z"
                        />
                      </svg>
                    </th>
                    <th className="px-4 py-2 justify-items-center">
                      <svg
                        className="h-8 w-8 text-neutral-300"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.7"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="17" r="2" />
                        <circle cx="17" cy="17" r="2" />
                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                        <line x1="3" y1="9" x2="7" y2="9" />
                      </svg>
                    </th>
                    <th className="px-4 py-2 justify-items-center">
                      <svg
                        className="w-[31px] h-[31px] text-gray-800 dark:text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.7"
                          d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                        />
                      </svg>
                    </th>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">{post.warrantyInformation}</td>
                    <td className="px-6 py-4">{post.shippingInformation}</td>
                    <td className="px-6 py-4">{post.returnPolicy}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
              <div className="flex items-center justify-between gap-6 mb-6">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                  {post.title}
                </h2>
              </div>
              <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                <div className="flex items-center">
                  <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
                    $ {post.price}{' '}
                  </h5>
                  <span className="ml-3 font-semibold text-lg text-indigo-600">
                    {post.discountPercentage}% off
                  </span>
                </div>
                <svg
                  className="mx-5 max-[400px]:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="36"
                  viewBox="0 0 2 36"
                  fill="none"
                >
                  <path d="M1 0V36" stroke="#E5E7EB" />
                </svg>
                <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_12657_16865)">
                      <path
                        d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                        fill="white"
                      />
                      <g clip-path="url(#clip1_12657_16865)">
                        <path
                          d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_12657_16865">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_12657_16865">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-base font-medium text-white">{post.rating}</span>
                </button>
              </div>
              <div className="flex items-center">
                <p className="font-medium text-sm text-gray-300 mb-2">Availability - </p>
                <p className="font-medium text-sm text-gray-900 mb-2 ml-1">
                  {post.availabilityStatus} {post.stock} left
                </p>
              </div>
              <p className="text-gray-700 mb-6">{post.description}</p>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap dark:text-gray-900"
                    >
                      Brand:
                    </th>
                    <td className="px-6 py-4">{post.brand}</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap dark:text-gray-900"
                    >
                      SKU:
                    </th>
                    <td className="px-6 py-4">{post.sku}</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap dark:text-gray-900"
                    >
                      Weight:
                    </th>
                    <td className="px-6 py-4">{post.weight}</td>
                  </tr>
                  <tr className="bg-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap dark:text-gray-900"
                    >
                      Dimension:
                    </th>
                    <td className="px-6 py-4">
                      {post.dimensions.width} x {post.dimensions.height} x {post.dimensions.depth}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                <div className=" flex items-center justify-center border border-gray-400 rounded-full">
                  <input
                    type="text"
                    className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-indigo-600 outline-0 hover:placeholder:text-indigo-600"
                    placeholder="1"
                  />
                </div>
                <button className="group py-3 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
              <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
                Buy Now
              </button>
              <div className="flex">
                {post.tags.map((tag) => (
                  <span className="mt-7 bg-gray-100 text-gray-800 text-md font-medium me-3 px-3.5 py-0.5 rounded-full border dark:border-gray-700 dark:text-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {post.reviews.map((review) => (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-sm flex flex-col-reverse justify-items-center bg-slate-100 rounded-lg p-6 dark:highlight-white/5 shadow-lg mb-10">
          <blockquote className="mt-6 text-slate-700 dark:text-slate-700">
            <p>{review.comment}</p>
          </blockquote>

          <div className="flex-auto">
            <div className="flex items-center justify-between text-base text-slate-900 font-semibold dark:text-slate-600">
              {review.reviewerName}
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;

                  // Determine if the star is full, half, or empty
                  let starClass = 'text-gray-300'; // Empty star by default
                  if (review.rating >= starValue) {
                    starClass = 'text-yellow-300'; // Full star
                  } else if (review.rating >= starValue - 0.5) {
                    starClass = 'text-yellow-300 half'; // Half star
                  }

                  return (
                    <svg
                      key={index}
                      className={`w-4 h-4 ms-1 ${starClass}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill={starClass.includes('half') ? 'url(#half-star)' : 'currentColor'}
                      viewBox="0 0 22 20"
                    >
                      {/* Defining the path for the star */}
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      {/* SVG gradient for the half star effect */}
                      {starClass.includes('half') && (
                        <defs>
                          <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="gray" />
                          </linearGradient>
                        </defs>
                      )}
                    </svg>
                  );
                })}
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {review.rating}
                </p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
              </div>
            </div>
            <div className="dark:text-slate-700 flex justify-between">
              {review.reviewerEmail}
              <em className="font-italic">{review.date}</em>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
