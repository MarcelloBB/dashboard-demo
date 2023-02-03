import Dashboard from "../../components/Dashboard"
import Sidebar from "../../components/Sidebar"

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default Home