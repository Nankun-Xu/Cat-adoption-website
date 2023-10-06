import './Footer.css';

function Footer({setPage}) {
    return (
        <footer className="footer">
            <h3 className="footer__title">This is our website</h3>

            <ul className="footer__link-list">
                <li className="footer__link-item">
                    <a className="footer__link-link" href="/privacy.html"
                        onClick={(e) => {
                            setPage('Policy');
                            e.preventDefault();
                        }}>
                        Privacy Policy
                    </a>
                </li>
                <li className="footer__link-item">
                    <a className="footer__link-link" href="/contact.html" 
                            onClick={(e) => {
                            setPage('Contact');
                            e.preventDefault();
                        }}>
                        Contact us
                    </a>
                </li>
                <li className="footer__link-item">
                    <a className="footer__link-link" href="/naps.html"
                    onClick={(e) => {
                        setPage('Terms');
                        e.preventDefault();
                    }}>
                        Term of Use
                    </a>
                </li>
            </ul>
            <ul className="footer__social-list">
                <li className="footer__social-item">
                    <a className="footer__social-link" href="https://www.facebook.com/">
                        Facebook
                    </a>
                </li>
                <li className="footer__social-item">
                    <a className="footer__social-link" href="https://www.instagram.com/">
                        Instagram
                    </a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;