import { 
  ChartLine, 
  UserCircle, 
  Gear, 
  Database, 
  ChartBar, 
  WarningCircle, 
  Export,
  GithubLogo,
  GitBranch,
  LinkedinLogo } from "phosphor-react"

const Sidebar = () => (
  <nav
    className="flex flex-col justify-evenly items-center
      min-h-screen w-1/5 bg-gray-200 px-2 py-10 shadow-xl
      lg:items-start"
  >
    <div
      className="flex flex-col items-center gap-4 ml-1 mb-8
        text-violet-700
        lg:flex-row
        lg:ml-4
        lg:mb-12"
        
    >
      <a href="">
        <GithubLogo
          size={24}
          className=" hover:text-violet-400 transition-colors duration-200 ease-in"
          weight="thin"
        />
      </a>
      <a href="">
        <GitBranch
          size={24}
          className="hover:text-violet-400 transition-colors duration-200 ease-in"
          weight="thin"
        />
      </a>
      <a href="">
        <LinkedinLogo
          size={24}
          className="hover:text-violet-400 transition-colors duration-200 ease-in"
          weight="thin"
        />
      </a>
    </div>

    <div
      className="flex items-center justify-start gap-2
        ml-2 hover:text-violet-500 transition-colors duration-200 ease-in cursor-pointer
        lg:ml-4
        "
    > 
      <ChartLine 
        size={20}
        weight="thin"
        className=""
      />

      <span className="font-semibold text-sm ml-1 
        hidden lg:inline">
          Dashboard
      </span>
    </div>

    <div
      className="flex items-center justify-start gap-2
        ml-2 mt-4 hover:text-violet-500 transition-colors duration-200 ease-in cursor-pointer
        lg:ml-4"
    >
      <UserCircle 
        size={20}
        weight="thin"
        className=""
      />

      <span className="font-semibold text-sm ml-1 
        hidden lg:inline">
          Profile
      </span>
    </div>

    <div
      className="flex items-center justify-start gap-2
        ml-2 mt-4 hover:text-violet-500 transition-colors duration-200 ease-in cursor-pointer
        lg:ml-4"
    >
      <ChartBar 
        size={20}
        weight="thin"
        className=""
      />

      <span className="font-semibold text-sm ml-1 
        hidden lg:inline">
          Analytics
      </span>
    </div>

    <div
      className="flex items-center justify-start gap-2
        ml-2 mt-4 hover:text-violet-500 transition-colors duration-200 ease-in cursor-pointer
        lg:ml-4"
    >
      <Database 
        size={20}
        weight="thin"
        className=""
      />

      <span className="font-semibold text-sm ml-1 
        hidden lg:inline">
          Databases
      </span>
    </div>

    <div
      className="flex items-center justify-start gap-2
        ml-2 mt-4 hover:text-violet-500 transition-colors duration-200 ease-in cursor-pointer
        lg:ml-4"
    >
      <WarningCircle
        size={20}
        weight="thin"
        className=""
      />

      <span className="font-semibold text-sm ml-1 
        hidden lg:inline">
          Alerts
      </span>
    </div>

    <div
      className="flex items-center justify-start gap-2
      ml-2 mt-4 hover:text-violet-500 transition-colors duration-200 ease-in cursor-pointer
      lg:ml-4"
    >
      <Export 
        size={20}
        weight="thin"
        className=""
      />

      <span className="font-semibold text-sm ml-1 
        hidden lg:inline">
          Export data
      </span>
    </div>

    <div
      className="flex items-center justify-start gap-2
        ml-2 mt-4 hover:text-violet-500 transition-colors duration-200 ease-in cursor-pointer
        lg:ml-4"
    >
      <Gear 
        size={20}
        weight="thin"
        className=""
      />

      <span className="font-semibold text-sm ml-1 
        hidden lg:inline">
          Settings
      </span>
    </div>
  </nav>
)

export default Sidebar