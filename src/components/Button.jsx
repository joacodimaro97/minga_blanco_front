import React from 'react'

export default function Button() {
  return (
    <div class="border border-solid border-gray-500 relative flex items-center rounded-md backdrop-blur-[15px]md:w-[100%]">
            <input class=" py-2 w-90 pl-10 bg-transparent text-center placeholder-white sm:w-[100%] md:w-[20rem]" type="search" placeholder="Search mangas"/>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-6 h-6 text-white left-3">

            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>

            </svg>
            <div class="absolute inset-0 bg-white bg-opacity-10 rounded-md"></div>
    </div>
  )
}
