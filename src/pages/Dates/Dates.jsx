import "./Dates.css";

export default function Dates() {
  return (
    <div className="Dates container-fluid d-flex justify-content-end align-items-center p-0 animate__animated animate__fadeInRight animate__slow">
      <div className="bg-transparent-purple container-fluid py-5 mt-5">
        <div className="container-fluid">
          <div className="row d-flex justify-content-end">
            <div className="col-12 col-md-4 col-lg-2 text-center me-lg-5">
              <h3 className="header-font bg-paint text-neon fs-1 p-2 text-uppercase">Austin</h3>
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
                <p className="salon text-neon header-font text-lowercase mb-0">Reve Studio</p>
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
            <div className="col-12 col-md-4 col-lg-2 text-center me-lg-5 mt-5 mt-lg-0">
              <h3 className="header-font bg-paint text-neon fs-1 p-2 text-uppercase">Dallas</h3>
              <div className="d-flex my-4 fw-bold text-white text-start lh-lg text-uppercase">
                <ul className="travel-dates body-font list-unstyled mx-auto mb-0">
                  <li>Feb 27</li>
                  <li>May 21</li>
                  <li>Sep 24</li>
                  <li>Dec 17</li>
                  <li className="d-none d-lg-block">&nbsp;</li>
                </ul>
              </div>
              <div>
                <p className="salon text-neon header-font text-lowercase mb-0">Kevin Charles Salon</p>
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
            <div className="col-12 col-md-4 col-lg-2 text-center me-lg-5 mt-5 mt-lg-0">
              <h3 className="header-font bg-paint text-neon fs-1 p-2 text-uppercase">Miami</h3>
              <div className="d-flex my-4 fw-bold text-white text-start lh-lg text-uppercase">
                <ul className="travel-dates body-font list-unstyled mx-auto mb-0">
                  <li>Mar 10 + 11</li>
                  <li>Jun 2 + 3</li>
                  <li>Aug 25 + 26</li>
                  <li>Nov 17 + 18</li>
                  <li className="d-none d-lg-block">&nbsp;</li>
                </ul>
              </div>
              <div>
                <p className="salon text-neon header-font text-lowercase mb-0">Dafne Evangelista Beauty Lounge</p>
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
  );
}
