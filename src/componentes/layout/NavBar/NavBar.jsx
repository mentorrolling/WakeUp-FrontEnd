import React from 'react';
import 'react-bootstrap';
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from "../../../assets/Screenshot_149-removebg-preview.png";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-center">
        <img  className= "logonav" src={logo} alt="logo" />
      <a className="navbar-brand" href="/"></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-hover" href="/menu">Menú</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-hover" href="/ubicacion">Ubicación</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-hover" href="/contacto">Contacto</a>
          </li>
          <li> <Link to="/login" className="link-button">
            Sing In
         </Link></li>
          <li>
            <Button className='registrarse'>Sing Un</Button>
          </li>
          
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
