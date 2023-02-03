import { 
  UserCircle,
  BellRinging,
  CalendarCheck,
  Clock, 
  MagnifyingGlass} from "phosphor-react"

import Searchbar from "./Searchbar"

const Topbar = () => ( // flex-row gap-8 p-8
  <div className="flex flex-col items-center justify-between gap-8 p-2 flex-nowrap
    w-full h-16 bg-gray-200 shadow-md
    lg:flex-row
    lg:p-8
    lg:md:justify-around">
    
    {/*    */}
    <div className="flex flex-row items-center justify-end gap-6 p-2
      lg:gap-8
      lg:p-8
      lg:flex-row"
    > 
      <div>
        <BellRinging
          size={22}
          weight="thin"
          className="hover:text-violet-400 transition-colors duration-200 ease-in"
        />
      </div>
      <div>
        <CalendarCheck
          size={22}
          weight="thin"
          className="hover:text-violet-400 transition-colors duration-200 ease-in"
        />
      </div>
      <div>
        <Clock
          size={22}
          weight="thin"
          className="hover:text-violet-400 transition-colors duration-200 ease-in"
        />
      </div>
    </div>

  </div>
)

export default Topbar