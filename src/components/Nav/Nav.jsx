import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {

    return (
        <div className="Nav">
            <h1 className="title-hover" onClick={() => setCurrentPage('home')}>Daniel Sung hoon Kim</h1>
            <ul>
                <li className="hover" onClick={() => setCurrentPage('booking')}>Booking</li>
                {/* <li className="hover"><a href="https://danielkim.as.me/" target="_blank" rel="noreferrer">Booking</a></li> */}
                <li className="hover" onClick={() => setCurrentPage('dates')}>Travel Dates</li>
                <li className="hover"><a href="https://shop.saloninteractive.com/store/DanielKim" target="_blank" rel="noreferrer">Shop</a></li>
                <li className="hover" onClick={() => setCurrentPage('about')}>About</li>
                <li className="hover"><a href="https://instagram.com/danielsunghoonkim/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                <li className="hover"><a href="mailto:daniel@danielsunghoonkim.com"><span className="material-symbols-outlined">mail</span></a></li>
            </ul>
        </div>
    );
}