"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-dropdown-select";

const AddProduct = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/AddProduct");
    },
  });
  // console.log(session);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = [
    {
      value: "Nandini",
      label: "Nandini",
    },
    {
      value: "Kavery",
      label: "Kavery",
    },
    {
      value: "Shambhavi",
      label: "Shambhavi",
    },
  ];

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(10);
  const [number, setNumber] = useState("");
  const [room, setRoom] = useState(107);
  const [hostel, setHostel] = useState("Nandini");
  // const [file,setFile] = useState()

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const hostelName = hostel[0].value
    // const formData = new FormData();
    const ownerEmail = session?.user?.email;
    const owner = session?.user?.name;
    // formData.append("file", file);
    try {
      const { data } = await axios.post("/api/AddProduct", {
        title,
        price,
        number,
        room,
        owner,
        ownerEmail,
        hostel:hostelName
      });
      console.log(data);
    } catch (error) {
      console.log(error)
    }
 
  };

  const onSubmit = async (data) => {
    // e.preventDefault()
    // console.log(data.file[0])
    const formData = new FormData();
    formData.append("file", data.file[0]);
    // console.log(file)
    console.log(formData);

    const { data: response } = await axios.post("/api/AddImage", formData);
    console.log(response);
  };

  return (
    <>
      <form className="max-w-xl mx-auto mt-10 min-h-screen border p-10 rounded-xl">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            value={session?.user?.email}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={session?.user?.name}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-5 ">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product price
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
            </div>
            <input
              type="number"
              id="currency-input"
              className="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Enter amount"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <button
            id="dropdown-phone-button"
            data-dropdown-toggle="dropdown-phone"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            +91{" "}
          </button>

          <div className="relative w-full">
            <input
              type="phone"
              id="phone-input"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="123-456-7890"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-10">
          <div>
            <label
              htmlFor="quantity-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose Room no:
            </label>
            <div className="relative flex items-center max-w-[8rem]">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                onClick={() => setRoom(room - 1)}
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={107}
                required
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
              <button
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none "
                onClick={() => setRoom(room + 1)}
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
            {/* <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              Please select a 5 digit number from 0 to 9.
            </p> */}
          </div>
        </div>

        <div className="mb-10">
          <Select
            className=" dark:bg-gray-700 text-black"
            multi={false}
            options={options}
            color="gray "
            onChange={(values) => setHostel(values)}
          />
        </div>

        <div class="flex items-center justify-center w-full mb-4">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span>
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              {...register("file")}
            />
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleAddProduct}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddProduct;
