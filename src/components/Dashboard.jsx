import { Airplane, Globe, Palette } from "phosphor-react"

import Cards from "./Cards"
import ChartContainer from "./ChartContainer"
import Searchbar from "./Searchbar"
import Topbar from "./Topbar"

const Dashboard = () => (
  <section className="flex flex-col w-full h-screen overflow-auto">
    <Topbar />

    {/* TITLE */}
    <div className="flex flex-col items-center justify-between lg:md:flex-row">
      <h1 
        className="font-extrabold text-xl text-zinc-700 m-4 lg:md:text-2xl">
          Dashboard
      </h1>
      <Searchbar />
    </div>

    {/* CARDS */}
    <Cards />

    {/* CHARTS */}
    <ChartContainer />

  </section>
)

export default Dashboard