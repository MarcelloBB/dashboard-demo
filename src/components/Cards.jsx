import { Airplane, Globe, Palette } from "phosphor-react"

const Cards = () => (
  <section 
    className="flex flex-col gap-3 justify-center items-center mt-6
      text-zinc-700 
        lg:flex-row
    ">
    
    {/* COUNTRIES */}
    <div
      className="flex flex-row items-center justify-between
        bg-zinc-100 rounded-xl w-10/12
          md:w-8/12
          lg:w-1/4"
    >
      <div className="m-4">
        <h3 className="font-bold text-gray-400">Countries</h3>
        <span className="text-3xl font-extrabold">5</span>
      </div>
      <Globe
        className="m-4 text-violet-700"
        size={40}
        weight="thin"
      />
    </div>

    {/* TRANSPORTATIONS */}
    <div
      className="flex flex-row items-center justify-between
        bg-zinc-100 rounded-xl w-10/12
          md:w-8/12
          lg:w-1/4"
    >
      <div className="m-4">
        <h3 className="font-bold text-gray-400">Transportations</h3>
        <span className="text-3xl font-extrabold">12</span>
      </div>
      <Airplane
        className="m-4 text-violet-700"
        size={40}
        weight="thin"
      />
    </div>

    {/* COLORS */}
    <div
      className="flex flex-row items-center justify-between
        bg-zinc-100 rounded-xl w-10/12
          md:w-8/12
          lg:w-1/4"
    >
      <div className="m-4">
        <h3 className="font-bold text-gray-400">Colors</h3>
        <span className="text-3xl font-extrabold">5</span>
      </div>
      <Palette
        className="m-4 text-violet-700"
        size={40}
        weight="thin"
      />
    </div>
  </section>
)

export default Cards