import { Link } from 'react-router-dom'

const Header =()=> {
    return (
        <header className="is-flex is-justify-content-space-around is-align-items-center">
            <h1 className="is-size-2">Mental Health</h1>
            <nav>
                <ul>
                    <Link>Sign In</Link>
                    <Link>Sign Up</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;