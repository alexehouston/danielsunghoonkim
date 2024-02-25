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
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13786.888624291569!2d-97.7808676!3d30.2449988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b563f639ac6f%3A0x32be7c095c7ce35b!2sReve%20Hair%20Studio!5e0!3m2!1sen!2sus!4v1708822657702!5m2!1sen!2sus"
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
                          REVIVE Beauty
                        </p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13423.282906334196!2d-96.8374842!3d32.7439507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9a27ae4968b7%3A0x67a952eb07b97a8c!2sREVIVE%20Beauty%20%26%20Wellness!5e0!3m2!1sen!2sus!4v1708822616752!5m2!1sen!2sus"
                          className="h-25 m-0 mt-2"
                          title="REVIVE Beauty & Wellness"
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
                          <span class="body-font">777</span> Miami
                        </p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14362.383195789487!2d-80.1841064!3d25.8498612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b709dac6c347%3A0x7219ee863e8ba791!2s777%20Miami!5e0!3m2!1sen!2sus!4v1708822562656!5m2!1sen!2sus"
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
