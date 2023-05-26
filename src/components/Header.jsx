import { Link } from "react-router-dom"
import { useState } from 'react'

let navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Portfolio',
        path: '/portfolio'
    },
    {
        title: 'Contact me',
        path: '/contact'
    },
];

/*
    1. we need an element that is 100vw 100vh
    2. populated with our links
*/

const Header = () => {
    const [menuShown, setMenuShown] = useState(false);
    const toggle = () => { setMenuShown(!menuShown) };


    return (
        <header>
            <nav className="desktop">
                <div className="desktop-nav-left">
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact me</Link>
                </div>
                <div className="desktop-nav-right">
                    <div className="dropdown">
                        <button>Projects</button>
                        <div className="dropdown-menu">
                            <Link to="/todo">Todo list</Link>
                            <Link to="/weather">Weather app</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="mobile">
                <button className="mobileMenuBtn" onClick={toggle}>

                    {menuShown ? (<svg className="svg-icon" viewBox="0 0 20 20">
                        <path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                    </svg>) : (<svg class="svg-icon" viewBox="0 0 20 20">
                        <path fill="none" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
                    </svg>)}
                </button>
                {menuShown && (
                    <div className="mobile-nav">
                        {navLinks.map((link, idx) => (
                            <div className="mobileLink" key={idx}>
                                <Link to={link.path}>{link.title}</Link>
                            </div>
                        ))}
                    </div>
                )}

            </nav>
        </header>
    )

}

export default Header