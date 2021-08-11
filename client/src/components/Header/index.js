import { Link } from 'react-router-dom'

const Header =()=> {
    return (
        <header className="is-flex is-justify-content-space-evenly is-align-items-center">
            <h1 className="is-size-2">Mental Health</h1>
            <nav>
                <ul className="w-100">
                    <Link>Sign In</Link>
                    <Link>Sign Up</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;