import "./Nav.css";

export default function Nav({ currentPage, setCurrentPage, isSmallScreen }) {
  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="Nav">
            <h1 className="title-hover" onClick={() => setCurrentPage("home")}>
              Daniel Sung Hoon Kim
            </h1>
            <ul>
              <li className="hover" onClick={() => setCurrentPage("booking")}>
                Booking
              </li>
              <li className="hover" onClick={() => setCurrentPage("dates")}>
                Travel Dates
              </li>
              <li className="hover">
                <a
                  href="https://shop.saloninteractive.com/store/DanielKim"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shop
                </a>
              </li>
              <li className="hover" onClick={() => setCurrentPage("about")}>
                About
              </li>
            </ul>
          </div>
          <div className="mobile-social">
            <a
              href="https://instagram.com/danielsunghoonkim/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram mobile-social-icon"></i>
            </a>
            <a href="mailto:daniel@danielsunghoonkim.com">
              <i className="fa-regular fa-envelope mobile-social-icon"></i>
            </a>
          </div>
        </>
      ) : (
        <div className="Nav">
          <h1 className="title-hover" onClick={() => setCurrentPage("home")}>
            Daniel Sung Hoon Kim
          </h1>
          <ul>
            <li className="hover" onClick={() => setCurrentPage("booking")}>
              Booking
            </li>
            <li className="hover" onClick={() => setCurrentPage("dates")}>
              Travel Dates
            </li>
            <li className="hover">
              <a
                href="https://shop.saloninteractive.com/store/DanielKim"
                target="_blank"
                rel="noreferrer"
              >
                Shop
              </a>
            </li>
            <li className="hover" onClick={() => setCurrentPage("about")}>
              About
            </li>
            <li>
              <a
                href="https://instagram.com/danielsunghoonkim/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="mailto:daniel@danielsunghoonkim.com">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
