"use client";
import React, { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import axios from 'axios';
import AllItem from '@/components/custom/AllItem';
  

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('Nandini');

  const [allPost,setAllPost] = useState([])

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
        console.log("worsdk")

    };

    const getAllPost = async () => {
      try {
        const {data } = await axios.get('/api/GetAllProduct');
        // console.log(data)
        setAllPost(...allPost,data?.allPost);
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getAllPost();
    },[])

  return (
    <>
    <div className=" flex justify-center items-center">
    <form className="w-[82%] mt-4">
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <Select >
          <SelectTrigger className="w-[180px] dark:bg-gray-700 bg-gray-300 ">
            <SelectValue placeholder={selectedValue} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Nandini" onClick={() => setSelectedValue("Nandini")}>Nandini</SelectItem>
            <SelectItem value="Sambhavi" onClick={() => setSelectedValue("Sambhavi")}>Sambhavi</SelectItem>
            <SelectItem value="kavery" onClick={() => setSelectedValue("kavery")}>kavery</SelectItem>
          </SelectContent>
        </Select>
        
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 "
            placeholder="Search Maggie, Biscuit or Record..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
    </div>
    <AllItem allPost={allPost}/>
    </>
  );
}
