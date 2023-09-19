import './NavBar.css'
import logoNav from "../../../assets/Screenshot_149-removebg-preview.png";
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {

  const handleButtonClick = () => {

  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/home"><img className='logoNav' src={logoNav} alt="Logo" />WakeUp!</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item mx-3 listNav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item listNav">
              <a className="nav-link active mx-4" href="/menu">
                Menu
              </a>
            </li>
            <li className="nav-item listNav">
              <a className="nav-link active mx-4" href="#">
                About us
              </a>
            </li>
            <li className="nav-item listNav">
              <a className="nav-link active mx-4" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline mx-2 singIn" type="button" onClick={handleButtonClick}><AiOutlineUser /> Sing In</button>
            <button className="btn btn-outline singUp" type="button" onClick={handleButtonClick}><AiOutlineUserAdd /> Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
