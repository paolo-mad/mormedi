import Logo from '../assets/logo.svg'
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <img src={Logo} alt="logo Mormedi" />
      </div>
      <div className="menu--list">
          <Link to={"/"} className='item'>
          Dashboard
          </Link>
          <Link to={"/clients"} className='item'>
          Clients
          </Link>
          <Link to={"/offers"} className='item'>
          Offers
          </Link>
          <Link to={"/reports"} className='item'>
          Reports
          </Link>
          <Link to={"/workteam"} className='item'>
          Work team
          </Link>    
      </div>
    </div>
  )
}

export default Sidebar