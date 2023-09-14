import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-center text-black" style={{ backgroundColor: '#f2d3bf' }}>
      <div className="container">
        <section className="mt-3">
          <div className="row text-center d-flex justify-content-center pt-3"> 
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black text-decoration-none">About us</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black text-decoration-none">Menús</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black text-decoration-none">Help</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black text-decoration-none">Contact</a>
              </h6>
            </div>
          </div>
        </section>
        <hr className="my-3" /> 
        <section className="mb-3"> 
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti
                dicta, aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center mb-3"> 
          <a href="https://www.facebook.com/" className="text-black me-3">
            <FaFacebookF className="facebook" />
          </a>
          <a href="https://twitter.com/" className="text-black me-3">
            <FaXTwitter />
          </a>
          <a href="https://www.google.com/" className="text-black me-3">
            <FaGoogle />
          </a>
          <a href="https://www.instagram.com/" className="text-black me-3">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" className="text-black me-3">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/" className="text-black me-3">
            <FiGithub />
          </a>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-black text-decoration-none"> HelloWorldCompany</a>
      </div>
    </footer>
  );
};

export default Footer;
