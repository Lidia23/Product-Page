import React from 'react';

type Props = {
  visibility: boolean;
  handleClose: () => void;
  content: string;
};
export function Modal({ visibility, handleClose, content }: Props) {
  return (
    <div
      id="popup-modal"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        visibility ? '' : 'hidden'
      }`}
    >
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 w-full max-w-md max-h-full modal">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        <div className="p-4 md:p-5 text-center">
          <h3 className="mb-5 text-xl font-normal text-gray-500 dark:text-gray-400 mt-10">
            {content}
          </h3>
        </div>
      </div>
    </div>
  );
}
