import "./Dates.css";

export default function Dates() {
  return (
    <div className="Booking vh-100 container-fluid d-flex justify-content-center align-items-center p-0 animate__animated animate__fadeInRight animate__slow">
      <div className="bg-transparent-purple container-fluid py-5 mt-5">
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-6 col-lg-3 text-center me-lg-5">
              <h3 className="canopee bg-paint text-neon fs-1 p-2">Austin</h3>
              <div className="d-flex flex-column flex-lg-row my-4 fw-bold text-white text-start lh-lg">
                <ul className="dates roboto text-uppercase list-unstyled mx-auto mb-0">
                  <li>Jan 14 + 15</li>
                  <li>Feb 25 + 26</li>
                  <li>Apr 7 + 8</li>
                  <li>May 19 + 20</li>
                  <li>Jun 30 + Jul 1</li>
                </ul>
                <ul className="dates roboto text-uppercase list-unstyled mx-auto mb-0">
                  <li>Aug 11 + 12</li>
                  <li>Sep 22 + 23</li>
                  <li>Nov 3 + 4</li>
                  <li>Dec 15 + 16</li>
                </ul>
              </div>
              <div>
                <h5 className="text-neon canopee text-uppercase fs-3">Rêve Studio</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13786.888624291569!2d-97.7808676!3d30.2449988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b563f639ac6f%3A0x32be7c095c7ce35b!2sR%C3%AAve%20Luxury%20Color%20%2B%20Extension%20Studio!5e0!3m2!1sen!2sus!4v1688680218690!5m2!1sen!2sus"
                  className="w-100 h-25 m-0"
                  title="Reve Studio"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-6 col-lg-3 text-center me-lg-5">
              <h3 className="canopee bg-paint text-neon fs-1 p-2">Dallas</h3>
              <div className="d-flex my-4 fw-bold text-white text-start lh-lg">
                <ul className="dates roboto text-uppercase list-unstyled mx-auto mb-0">
                  <li className="opacity-25">Mar 19</li>
                  <li className="opacity-25">Jun 13</li>
                  <li className="opacity-25">Sep 11</li>
                  <li>Dec 6</li>
                  <li>&nbsp;</li>
                  <li className="d-lg-none">&nbsp;</li>
                  <li className="d-lg-none">&nbsp;</li>
                  <li className="d-lg-none">&nbsp;</li>
                  <li className="d-lg-none">&nbsp;</li>
                </ul>
              </div>
              <div>
                <h5 className="text-neon canopee text-uppercase fs-3">Kevin Charles Salon</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13407.801240363377!2d-96.7873256!3d32.8465673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f5be293b89d%3A0x3206fbe57886a431!2sKevin%20Charles%20Salon!5e0!3m2!1sen!2sus!4v1688680402062!5m2!1sen!2sus"
                  className="w-100 h-25 m-0"
                  title="Kevin Charles Salon"
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
