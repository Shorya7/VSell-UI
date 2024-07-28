import React from 'react'

const SearchBar = () => {
  return (
    
<form className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
    <div className="relative m-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="size-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text- 
        text-gray-900 font-semibold rounded-2xl bg-search-bg " placeholder="Search Store" required />
    </div>
</form>

  )
}

export default SearchBar