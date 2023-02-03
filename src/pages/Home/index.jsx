import Sidebar from "../../components/Sidebar"
import Topbar from "../../components/Topbar"


const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Topbar />
    </div>
  )
}

export default Home