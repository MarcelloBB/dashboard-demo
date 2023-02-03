import { MagnifyingGlass } from "phosphor-react"

const Searchbar = () => (
  <form 
    className="flex flex-row justify-center items-center 
      px-3 m-4
      border border-zinc-100 rounded-lg bg-zinc-50 shadow-md
      hover:border-zinc-300
      transition-colors duration-200 ease-in
      focus:outline-none
      
      lg:w-1/5
      lg:md:m-4
      lg:md:gap-3"
  >
    <MagnifyingGlass
      size={20}
      weight="thin"
      className="text-zinc-600"
    />

    <input 
      type="text"
      placeholder="Search for something" 
      className="w-full bg-zinc-50 p-2 transition-colors focus:outline-none text-sm"
    />
  </form>
)

export default Searchbar