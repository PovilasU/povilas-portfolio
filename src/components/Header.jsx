import { Link } from "react-router-dom"

const Header = ()=>{
    return(
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
            <nav className="mobile dropdown">
                <h3>Menu</h3>
                <div className="mobile-nav-links dropdown-menu">
                    <a href="./todo">LINK</a>
                    <a href="#">LINK</a>
                    <a href="#">LINKTEst</a>
                </div>
            </nav>
        </header>
    )

}

export default Header