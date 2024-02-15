import axios from "axios";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const Card = ({ product }) => {
  const handleWhatsApp = async () => {
    const number = product?.mobile;
    
    const message = `Hey ${product?.owner}, I want to buy ${product?.title}`;
    window.open((`https://web.whatsapp.com/send?phone=${number}&text=${message}&app_absent=0`))
  }
  return (
    <>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            alt="card-image"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {product?.title}
          </h5>
          <h1 class=" justify-center gap-1  font-sans antialiased font-normal tracking-normal text-white dark:text-gray-700 text-5xl">
            <span class="mt-2 text-xl">rs</span>
            {product?.price}
          </h1>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Owner: {product?.owner}
          </p>
          <p className="">
            Room no:
            <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 ml-4">
              {product?.roomNo}
            </span>
          </p>
          <p className="">
            Room no:
            <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 ml-4">
              {product?.hostel}
            </span>
          </p>
        </div>
        <div className="p-6 pt-0 ">
          <div className=" flex justify-between">
            
          <div className="w-full max-w-[16rem] ">
            <div className="relative">
              <label htmlFor="npm-install-copy-text" className="sr-only">
                Label
              </label>
              <input
                id="npm-install-copy-text"
                type="text"
                className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={product?.mobile}
                disabled
                readOnly
              />
              <button
                data-copy-to-clipboard-target="npm-install-copy-text"
                className="active:scale-90 absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
                onClick={() => {
                  navigator.clipboard.writeText(product?.mobile);
                }}
              >
                <span id="default-message" className="inline-flex items-center">
                  <svg
                    className="w-3 h-3 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                  <span className="text-xs font-semibold">Copy</span>
                </span>
                <span
                  id="success-message"
                  className="hidden inline-flex items-center"
                >
                  <svg
                    className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">
                    Copied
                  </span>
                </span>
              </button>
              
            </div>
          </div>
          
          <FaWhatsapp onClick={handleWhatsApp} className="h-12 w-12 text-green-500 hover:bg-green-500 hover:text-white cursor-pointer rounded-full p-2 "/>

          </div>

        </div>
      </div>
    </>
  );
};

export default Card;
