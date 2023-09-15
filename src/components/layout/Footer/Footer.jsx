import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import { BiHomeAlt2, BiInfoCircle } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineHeart } from "react-icons/ai";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-black">
      <div className="container p-3 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-3 font-weight-bold">
                WakeUp!-Coffe
              </h6>
              <p>
                Experience pure coffee bliss at WakeUp! Coffee Shop, where passion meets quality in every cup. Explore our aromatic world of freshly roasted beans, served with love from the heart of the city.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-3 font-weight-bold ">Products</h6>
              <p>
                <a className="text-black text-decoration-none">Coffe</a>
              </p>
              <p>
                <a className="text-black text-decoration-none">Croassaints</a>
              </p>
              <p>
                <a className="text-black text-decoration-none">Cakes</a>
              </p>
              <p>
                <a className="text-black text-decoration-none">Sandwiches</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-3 font-weight-bold">
                Creators
              </h6>
              <p>
                <a className="text-black text-decoration-none"><AiOutlineHeart /> Agus Dominguez</a>
              </p>
              <p>
                <a className="text-black text-decoration-none"><AiOutlineHeart /> Lu Rivadeneira</a>
              </p>
              <p>
                <a className="text-black text-decoration-none"><AiOutlineHeart /> Ian Figueroa</a>
              </p>
              <p>
                <a className="text-black text-decoration-none"><AiOutlineHeart /> Gus Andina</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-3 font-weight-bold">Contact</h6>
              <p><BiHomeAlt2 /> Tucumán, SM 4000, ARG</p>
              <p><BiInfoCircle /> HelloWorldCompany@gmail.com</p>
              <p><BsTelephone /> +01 234 567 89</p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-2 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-2">
                © 2023 Copyright:
                <a className="text-black text-decoration-none">
                  HelloWorldCompany
                </a>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
              >
                <FaFacebookF />
              </a>

              <a
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
              >
                <FaXTwitter />
              </a>

              <a
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
              >
                <FaGoogle />
              </a>

              <a
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
              >
                <FaInstagram />
              </a>
              <a
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
