"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/ModeToggle";
import { usePathname, useRouter } from "next/navigation";
const Nav = () => {
  // const session = ''

  const url = usePathname()
  // console.log(url)
  const { data: session } = useSession();

  const [openNav, setOpenNav] = useState(false);

  const router = useRouter()

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://HostelBazzar.com/docs/images/logo.svg"
              className="h-8"
              alt="HostelBazzar Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              HostelBazzar
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center border p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpenNav(!openNav)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${openNav ? "" : "hidden"} w-full md:block md:w-auto  `}
            id="navbar-default"
          >
            <ul className=" font-medium flex justify-start sm:justify-center sm:items-center items-start flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li>
                <Link
                  href="/"
                  className={`block   dark:text-white rounded md:bg-transparent  md:p-0   ${url=='/'?"text-blue-500 dark:text-blue-500":""} `}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/ClientMember"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  ClientMember
                </Link>
              </li>
              <li>
                <Link
                  href="/Member"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Member
                </Link>
              </li>
              <li>
                <Link
                  href="/Public"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Public
                </Link>
              </li> */}
              {
                session &&(
                  <Link href={'/AddProduct'} className={`${url=='/AddProduct'?"text-blue-500 dark:text-blue-500":""}`}>
                    Add an item
                  </Link>

                )
              }
              <li>
                {session ? (
                  <Link href="/api/auth/signout?callbackUrl=/" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800">Logout</Link>
                ) : (
                  <Link href="/api/auth/signin" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
                )}
              </li>
              <li>
                {
                  !session && (
                   <Button variant="secondary" onClick={() => router.push('/CreateUser')}>Signup</Button>
                  )
                }
              </li>
              <li>
                <ModeToggle/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
