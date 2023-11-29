import "./Booking.css";

export default function Booking() {
  return (
    <div className="Booking vh-100 container-fluid d-flex justify-content-center align-items-center p-0 animate__animated animate__fadeInRight animate__slow">
      <div className="bg-transparent-purple container-fluid py-5 mt-5">
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-12 col-md-6 col-lg-3 text-center me-lg-5">
              <h3 className="header-font bg-paint text-neon fs-1 p-3 text-uppercase">Texas</h3>
              <button className="booking-button mt-3 mt-lg-5 mb-5 mb-lg-0 py-1 px-3 fs-5 fw-bold border border-3 border-black">
                <a
                  className="text-black header-font text-lowercase"
                  href="https://danielkim.as.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click To Book
                </a>
              </button>
            </div>
            <div className="col-12 col-md-6 col-lg-3 text-center">
              <h3 className="header-font bg-paint text-neon fs-1 p-3 text-uppercase">
                California
              </h3>
              <div>
                <h5 className="text-white header-font fs-2 mt-3 mt-lg-5">
                  mare salon
                </h5>
                <ul className="list-unstyled d-flex justify-content-between align-items-center py-3 w-75 mx-auto">
                  <li className="fs-5 fs-lg-4">
                    <a
                      href="http://maresalon.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-globe"></i>
                    </a>
                  </li>
                  <li className="fs-5 fs-lg-4">
                    <a
                      href="https://www.instagram.com/mare_salon/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="fs-5 fs-lg-4">
                    <a href="sms:4242743479">
                      <i className="fa-solid fa-comment"></i>
                    </a>
                  </li>
                  <li className="fs-5 fs-lg-4">
                    <a href="tel:4242743479">
                      <i className="fa-solid fa-phone"></i>
                    </a>
                  </li>
                  <li className="fs-5 fs-lg-4">
                    <a
                      href="mailto:info@maresalon.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </li>
                </ul>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7141786706607!2d-118.3884913!3d34.076840499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2beabea185d27%3A0xd5a9c036f831abc8!2s152%20N%20Wetherly%20Dr%2C%20West%20Hollywood%2C%20CA%2090048!5e0!3m2!1sen!2sus!4v1688681340040!5m2!1sen!2sus"
                  className="w-75 w-lg-100 h-25 m-0"
                  title="Mare Salon"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
