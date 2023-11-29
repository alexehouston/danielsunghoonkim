import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav navbar fixed-top py-0 animate__animated animate__fadeInDown animate__slow">
      <div className="col-12 col-md-12 col-lg-7 my-auto ps-lg-4 py-3 py-lg-0">
        <Link to="/">
          <h1 className="title-hover text-neon canopee mb-0 position-relative lh-1">
            Daniel Sung Hoon Kim
          </h1>
        </Link>
      </div>
      <div className="col-12 col-md-12 col-lg-5 nav-right py-2 py-lg-4">
        <ul className="d-flex align-items-center justify-content-around mb-0 px-0 list-unstyled">
          <Link className="text-navy canopee fs-4" to="/booking">
            <li className="hover">Book</li>
          </Link>
          <Link className="text-navy canopee fs-4" to="/dates">
            <li className="hover">Dates</li>
          </Link>
          <a
            href="https://shop.saloninteractive.com/store/DanielKim"
            target="_blank"
            rel="noreferrer"
            class="text-navy canopee fs-4"
          >
            <li className="hover">Shop</li>
          </a>
          <Link className="text-navy canopee fs-4" to="/about">
            <li className="hover">About</li>
          </Link>
          <li>
            <a
              href="https://instagram.com/danielsunghoonkim/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram fs-5 fs-lg-4 animate__animated animate__fadeInDown animate__slower"></i>
            </a>
            <a href="mailto:daniel@danielsunghoonkim.com">
              <i className="fa-regular fa-envelope fs-5 fs-lg-4 ms-4 animate__animated animate__fadeInDown animate__slower"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
