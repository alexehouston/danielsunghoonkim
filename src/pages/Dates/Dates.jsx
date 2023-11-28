import './Dates.css';

export default function Dates() {
    return (
        <div className="Dates">
            <div className="cities">
                <div className="city">
                    <h3>Austin</h3>
                    <div className="dates">
                        <div className="col">
                            <li>Jan 14 + 15</li>
                            <li>Feb 25 + 26</li>
                            <li>Apr 7 + 8</li>
                            <li>May 19 + 20</li>
                            <li>Jun 30 + Jul 1</li>
                        </div>
                        <div className="col">
                            <li>Aug 11 + 12</li>
                            <li>Sep 22 + 23</li>
                            <li>Nov 3 + 4</li>
                            <li>Dec 15 + 16</li>
                        </div>
                    </div>
                    <div className="salon">
                        <h6>Rêve Studio</h6>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13786.888624291569!2d-97.7808676!3d30.2449988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b563f639ac6f%3A0x32be7c095c7ce35b!2sR%C3%AAve%20Luxury%20Color%20%2B%20Extension%20Studio!5e0!3m2!1sen!2sus!4v1688680218690!5m2!1sen!2sus" title="Reve Studio" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="city">
                    <h3>Dallas</h3>
                    <div className="dates">
                        <div>
                            <li className="past-date">March 19</li>
                            <li className="past-date">June 13</li>
                            <li className="past-date">September 11</li>
                            <li>December 6</li>
                            <li>&nbsp;</li>
                            <div className="sm-col">
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                            </div>
                        </div>
                    </div>
                    <div className="salon">
                        <h6>Kevin Charles Salon</h6>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13407.801240363377!2d-96.7873256!3d32.8465673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f5be293b89d%3A0x3206fbe57886a431!2sKevin%20Charles%20Salon!5e0!3m2!1sen!2sus!4v1688680402062!5m2!1sen!2sus" title="Kevin Charles Salon" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}