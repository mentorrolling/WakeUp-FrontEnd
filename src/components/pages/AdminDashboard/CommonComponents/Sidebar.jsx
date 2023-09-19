
import { BiUser, BiPencil, BiFoodMenu, BiPowerOff } from "react-icons/bi"
import { GrUserAdmin } from 'react-icons/gr'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading text-center py-4 second-text fs-4 fw-bold text-uppercase border-bottom">
        <GrUserAdmin className="me-3 mb-2 second-text"/>WakeUp!
      </div>
      <div className="list-group list-group-flush my-3">
        <Link to="/dashboard/users" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <BiUser className='me-2'/>Users
        </Link>
        <Link to="/dashboard/menus" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <BiFoodMenu className='me-2'/>Menús
        </Link>
        <Link to="/dashboard/orders" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <BiPencil className='me-2'/>Orders
        </Link>
        <Link to="/logout" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
          <BiPowerOff className='me-2'/>Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;