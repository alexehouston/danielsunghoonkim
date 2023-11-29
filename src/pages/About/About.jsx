import "./About.css";

export default function About() {
  return (
    <div className="Booking vh-100 container-fluid d-flex justify-content-center align-items-center p-0 animate__animated animate__fadeInRight animate__slow">
      <div className="bg-transparent-purple container-fluid py-5 mt-5">
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-12 col-lg-5 text-center me-lg-5 pe-lg-5">
              <h3 className="header-font bg-paint text-neon fs-1 py-4 text-uppercase">
                About Daniel
              </h3>
              <p className="body-font text-white small mx-auto mt-5">
                Daniel is a hairstylist with a decade of experience in the
                industry. He started his journey as a hairstylist at the young
                age of 17 and has since then had the opportunity to work with
                some of the top names in the industry.
                <br />
                <br />
                In addition to his work as a stylist, Daniel also had the
                privilege of working with L'Oreal, where he gained valuable
                knowledge and skills. He has also served as the lead educator
                for Curated Cutting, a hair cutting academy, for the past four
                years.
                <br />
                <br />
                Daniel constantly seeks new ways to expand his knowledge and
                improve his craft, and he is dedicated to providing his clients
                with the best possible service and experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
