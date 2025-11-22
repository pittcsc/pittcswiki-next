import Image from "next/image"

import searchIcon from "@/images/search-icon.svg"

const Search = () => {
  return (
    <div className="flex gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded items-center">
      <label htmlFor="search-bar" className="h-8 flex items-center ml-2">
        <Image src={searchIcon} alt="Search Icon" className="max-h-4 w-auto" />
      </label>
      <input
        id="search-bar"
        type="text"
        placeholder="Search"
        className="flex-1 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none p-2"
      />
    </div>
  )
}

export default Search
