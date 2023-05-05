import './Dates.css';

export default function Dates() {
    return (
        <div className="Dates">
            <div className="cities">
                <div className="city">
                    <h3>Austin</h3>
                    <div className="dates">
                        <li>April 30 + May 1</li>
                        <li>June 11 + 12</li>
                        <li>August 6 + 7</li>
                        <li>September 10</li>
                        <li>October 22 + 23</li>
                        <li>December 3 + 4</li>
                    </div>
                    <h6>Salon Location:</h6>
                    <a href="https://www.kcsalons.com/" target="_blank" rel="noreferrer"><h6>Rêve Studio</h6></a>
                    <div className="address">
                        <a href="https://www.google.com/maps/place/R%C3%AAve+Luxury+Color+%2B+Extension+Studio/@30.2449988,-97.7808676,15z/data=!4m2!3m1!1s0x0:0x32be7c095c7ce35b?sa=X&ved=2ahUKEwjG-t3R_dz-AhW7lmoFHZMTCfwQ_BJ6BAhgEAc" target="_blank" rel="noreferrer">
                            <li>2708 S Lamar Blvd #100B</li>
                            <li>Austin, TX 78704</li>
                        </a>
                    </div>
                </div>
                <div className="city">
                    <h3>Dallas</h3>
                    <div className="dates">
                        <li>March 19</li>
                        <li>June 13</li>
                        <li>September 11</li>
                        <li>December 6</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                    </div>
                    <a href="https://www.kcsalons.com/" target="_blank" rel="noreferrer"><h6>Kevin Charles Salon</h6></a>
                    <div className="address">
                        <a href="https://www.google.com/maps/place/Kevin+Charles+Salon/@32.8465673,-96.7873256,15z/data=!4m2!3m1!1s0x0:0x3206fbe57886a431?sa=X&ved=2ahUKEwiv-c2u7Zz8AhUjmWoFHQZ-AygQ_BJ6BAhnEAg" target="_blank" rel="noreferrer">
                            <li>6565 Hillcrest Ave</li>
                            <li>Dallas, TX, 75205</li>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}