
import { Outlet } from "react-router-dom"
import Sidebar from '../components/Sidebar'
import Header from "../components/Header"

function App() {

  return (
    <div className="dashboard">
      <Sidebar/>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
