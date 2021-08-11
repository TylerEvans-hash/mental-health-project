import { Link } from 'react-router-dom'

const Header =()=> {
    return (
        <header className="is-flex is-justify-content-space-around is-align-items-center">
            <h1 className="is-size-2"><Link to="/" style={{color: "#000"}}>Mental Health</Link></h1>
            <nav>
                <ul>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;