import "./Dates.css";

export default function Dates() {
  return (
    <div className="Dates container-fluid d-flex justify-content-end align-items-center p-0 animate__animated animate__fadeInRight animate__slow">
      <div className="container-fluid py-5 mt-5">
        <div className="container-fluid">
          <div className="row d-flex justify-content-end">
            <div className="accordion col-lg-4" id="datesAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <span className="header-font bg-paint text-neon fs-1 px-3 text-uppercase text-center">
                      Austin
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#datesAccordion"
                >
                  <div className="accordion-body">
                    <div className="col-12 text-center">
                      <div className="d-flex flex-row my-4 fw-bold text-white text-start lh-lg text-uppercase">
                        <ul className="travel-dates body-font list-unstyled mx-auto mb-0">
                          <li>Jan 14 + 15</li>
                          <li>Feb 25 + 26</li>
                          <li>Apr 7 + 8</li>
                          <li>May 19 + 20</li>
                          <li>Jun 30 + Jul 1</li>
                        </ul>
                        <ul className="travel-dates body-font list-unstyled mx-auto mb-0">
                          <li>Aug 11 + 12</li>
                          <li>Sep 22 + 23</li>
                          <li>Nov 3 + 4</li>
                          <li>Dec 15 + 16</li>
                        </ul>
                      </div>
                      <div>
                        <p className="salon text-neon header-font text-lowercase mb-0">
                          Reve Studio
                        </p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13786.888624291569!2d-97.7808676!3d30.2449988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b563f639ac6f%3A0x32be7c095c7ce35b!2sR%C3%AAve%20Luxury%20Color%20%2B%20Extension%20Studio!5e0!3m2!1sen!2sus!4v1688680218690!5m2!1sen!2sus"
                          className="h-25 m-0 mt-2"
                          title="Reve Studio"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <span className="header-font bg-paint text-neon fs-1 px-3 text-uppercase text-center">
                      Dallas
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#datesAccordion"
                >
                  <div className="accordion-body">
                    <div className="col-12 text-center">
                      <div className="d-flex my-4 fw-bold text-white text-start lh-lg text-uppercase">
                        <ul className="travel-dates body-font list-unstyled mx-auto mb-0">
                          <li>Feb 27</li>
                          <li>May 21</li>
                          <li>Sep 24</li>
                          <li>Dec 17</li>
                        </ul>
                      </div>
                      <div>
                        <p className="salon text-neon header-font text-lowercase mb-0">
                          Kevin Charles Salon
                        </p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13407.801240363377!2d-96.7873256!3d32.8465673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f5be293b89d%3A0x3206fbe57886a431!2sKevin%20Charles%20Salon!5e0!3m2!1sen!2sus!4v1688680402062!5m2!1sen!2sus"
                          className="h-25 m-0 mt-2"
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
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <span className="header-font bg-paint text-neon fs-1 text-uppercase text-center">
                      Miami
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#datesAccordion"
                >
                  <div className="accordion-body">
                    <div className="col-12 text-center">
                      <div className="d-flex my-4 fw-bold text-white text-start lh-lg text-uppercase">
                        <ul className="travel-dates body-font list-unstyled mx-auto mb-0">
                          <li>Mar 10 + 11</li>
                          <li>Jun 2 + 3</li>
                          <li>Aug 25 + 26</li>
                          <li>Nov 17 + 18</li>
                        </ul>
                      </div>
                      <div>
                        <p className="salon text-neon header-font text-lowercase mb-0">
                          Dafne Beauty Lounge
                        </p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14367.285334821097!2d-80.194132!3d25.8094678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b153e6bcfecf%3A0x1775dd7074a80144!2sDafne%20Salon!5e0!3m2!1sen!2sus!4v1704745334661!5m2!1sen!2sus"
                          className="h-25 m-0 mt-2"
                          title="Dafne Evangelista Salon"
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
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
