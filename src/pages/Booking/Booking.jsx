import './Booking.css';

export default function Booking() {
    return (
        <div className="Booking">
            <div className="booking-info">
                <div className="texas-booking">
                    <h3>Texas</h3>
                    <button className="button-54"><a href="https://danielkim.as.me/" target="_blank" rel="noreferrer">Click To Book</a></button>
                </div>
                <div className="cali-booking">
                    <h3>California</h3>
                    <div className="mare">
                        <h5>Mare Salon</h5>
                        <div className="contact-icons">
                            <li><a href="http://maresalon.com/" target="_blank" rel="noreferrer"><i className="fa-solid fa-globe"></i></a></li>
                            <li id="mare-ig"><a href="https://www.instagram.com/mare_salon/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="sms:4242743479"><i className="fa-solid fa-comment"></i></a></li>
                            <li><a href="tel:4242743479"><i className="fa-solid fa-phone"></i></a></li>
                            <li><a href="mailto:info@maresalon.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></li>
                        </div>
                        <li className="mare-address hover"><a href="https://www.google.com/maps/place/152+N+Wetherly+Dr,+West+Hollywood,+CA+90048/@34.0768405,-118.3884913,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2beabea185d27:0xd5a9c036f831abc8!8m2!3d34.0768405!4d-118.3884913!16s%2Fg%2F11bw4f18rr?entry=ttu" target="_blank" rel="noreferrer">
                            152 North Wetherly Drive<br/>
                            West Hollywood, CA 90048
                        </a></li>
                </div>
                </div>
            </div>
        </div>
    );

    }