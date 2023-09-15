
import React from 'react';

const Navbar = () => {

  const handleButtonClick = () => {
    
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          Navbar
        </a>
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
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Location
              </a>
            </li>
          </ul>
          <form className="d-flex">
            
            <button className="btn btn-outline-success mx-2" type="submit" onClick={handleButtonClick}>
              Sing In  
            </button>
            <button className="btn btn-outline-success " type="submit" onClick={handleButtonClick}>
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
