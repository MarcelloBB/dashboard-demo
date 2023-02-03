import { Airplane, Globe, Palette } from "phosphor-react"
import Cards from "./Cards"
import Searchbar from "./Searchbar"
import Topbar from "./Topbar"

const Dashboard = () => (
  <section className="flex flex-col w-full">
    <Topbar />

    <div 
      className="flex flex-col items-center justify-between lg:md:flex-row"
    >
      <h1 
        className="font-extrabold text-xl text-zinc-700 m-4
          lg:md:text-2xl">
          Dashboard
      </h1>

      <Searchbar />
    </div>

    {/* CARDS */}
    <Cards />
  </section>
)

export default Dashboard