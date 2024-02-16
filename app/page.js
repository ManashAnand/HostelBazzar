"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AllItem from "@/components/custom/AllItem";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Select from "react-dropdown-select";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("All Hostel");

  const handleChange = (value) => {
    // if(value == "All Hostel") selectedValue("")
    setSelectedValue(value[0]?.value);
  };



  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
        const { data } = await axios.get("/api/GetAllProduct");
        return data;
      
    },
  });

  if (isPending) return "Loading...";

  if (error){
    return "An error has occurred: " + error;
  } 

  const options = [
    { value: "All Hostel", label: "All Hostel" },

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
  // console.log(data?.allPost)
  return (
    <>
      <div className=" flex justify-center items-center">
        <form className="w-[82%] mt-4">
          <div className="flex justify-center items-center ">
            <Select
              className=" dark:bg-gray-700 text-black  flex justify-center items-center"
              style={{ minWidth: "10rem ", height: "2.5rem" }}
              multi={false}
              options={options}
              color="gray "
              onChange={(value) => handleChange(value)}
            />

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
      <AllItem allPost={data?.allPost} hostelName={selectedValue} />

      <FloatingWhatsApp
        phoneNumber={"7067690247"}
        accountName={"Manash Anand"}
        avatar={"./assets/icon.jpg"}
        darkMode={true}
        allowEsc
      />
    </>
  );
}
