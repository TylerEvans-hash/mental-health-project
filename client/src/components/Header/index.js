import { Link } from 'react-router-dom'


import Auth from '../../utils/auth';

const Header = () => {
    return (
        <header className="is-flex is-justify-content-space-around is-align-items-center is-flex-wrap-wrap">
            <h1 className="is-size-2"><Link to="/" style={{color: "rgb(4, 185, 50)"}}>Mental Health</Link></h1>
            <nav>
                <ul>
                    {
                        Auth.loggedIn() ?
                            (
                                <>
                                    <Link to="/donate">Donate</Link>
                                    <Link to="/" onClick={Auth.logout}>Logout</Link>
                                </>
                            )
                            :
                            (
                                <>
                                    <Link to="/signin">Sign In</Link>
                                    <Link to="/signup">Sign Up</Link>
                                </>
                            )
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;