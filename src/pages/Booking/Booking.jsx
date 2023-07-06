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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7141786706607!2d-118.3884913!3d34.076840499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2beabea185d27%3A0xd5a9c036f831abc8!2s152%20N%20Wetherly%20Dr%2C%20West%20Hollywood%2C%20CA%2090048!5e0!3m2!1sen!2sus!4v1688681340040!5m2!1sen!2sus" title="Reve Studio" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );

    }