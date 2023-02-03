import { 
  UserCircle,
  BellRinging,
  CalendarCheck,
  Clock, 
  MagnifyingGlass} from "phosphor-react"

const Topbar = () => (
  <div className="flex flex-row items-center justify-between gap-8 p-8
    w-full h-16 bg-gray-200 shadow-md">
    
    <div className="flex flex-row items-center justify-end gap-8 p-8">
      <div>
        <BellRinging
          size={26}
          weight="thin"
          className="hover:text-violet-400 transition-colors duration-200 ease-in"
        />
      </div>
      <div>
        <CalendarCheck
          size={26}
          weight="thin"
          className="hover:text-violet-400 transition-colors duration-200 ease-in"
        />
      </div>
      <div>
        <Clock
          size={26}
          weight="thin"
          className="hover:text-violet-400 transition-colors duration-200 ease-in"
        />
      </div>
    </div>

    <form 
      className="flex flex-row justify-center items-center gap-3
        px-3
        border border-zinc-100 rounded-lg bg-zinc-50
        hover:border-zinc-300
        transition-colors duration-200 ease-in
        focus:outline-none"
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

  </div>
)

export default Topbar