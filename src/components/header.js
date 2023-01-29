import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css'

export default function Header () {
    const l = useLocation().pathname === '/fi' ? 'fi' : 'en'

    function hover(element) {
        element.setAttribute('src', 'pfp2.jpg');
    }
    
    function unhover(element) {
        element.setAttribute('src', 'pfp.jpg');
    }
    
    return <div className="header">
            <div className="container">
                <h1>Risto Virtaharju</h1>
                <div className="sub-header">
                    <p>{l === 'fi' ? 'Yhteystiedot' : 'Contact details'}</p>
                    <a href="https://www.linkedin.com/in/risto-virtaharju-5a01b524b/"><img className="icon" 
                        src="linkedin.png"
                        alt="linkedin icon"
                        />
                    </a>
                    <a href="rvirtaha@hotmail.com" id="email"><img className="icon" 
                            src="mail.png"
                            alt="mail icon"
                        />
                    </a>
                    <a href="https://github.com/rvirtaha"><img className="icon" 
                            src="github.png"
                            alt="github icon"
                        />
                    </a>
                </div>
                <div className="contact-details">
                    <p>rvirtaha@hotmail.com</p>
                </div>
            </div>
            <img className="pfp"
                id="pfp" 
                src="pfp.jpg"
                alt="Risto Virtaharju"
                onMouseOver={() => hover(document.getElementById("pfp"))}
                onMouseOut={() => unhover(document.getElementById("pfp"))}
            />
            <div className='kielivalinta'>
                <Link className='link' to={'/fi'}><p>🇫🇮</p></Link>
                <Link className='link' to={'/en'}><p>🇬🇧</p></Link>
            </div>
        </div>
}