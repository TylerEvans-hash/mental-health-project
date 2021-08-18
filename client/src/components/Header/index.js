import { Link } from 'react-router-dom'


import Auth from '../../utils/auth';

const Header = () => {
    return (
        <header className="is-flex is-justify-content-space-around is-align-items-center is-flex-wrap-wrap">
            <h1 className="is-size-2"><Link to="/" style={{color: "rgb(4, 185, 50)"}}>Plan Community</Link></h1>
            <nav>
                <ul>
                    {
                        
                        
                        Auth.loggedIn() ?
                            (
                                <>
                                    <Link to="https://www.sandbox.paypal.com/donate?hosted_button_id=XZB66YKRD5SR4" style={{color: "rgb(4, 185, 50)"}} >Donate</Link>
                                    <Link to="/" onClick={Auth.logout}>Logout</Link>
                                </>
                            )
                            :
                            (
                                <>
                                    <Link to="/signin" style={{color: "rgb(4, 185, 50)"}} >Sign In</Link>
                                    <Link to="/signup" style={{color: "rgb(4, 185, 50)"}} >Sign Up</Link>
                                </>
                            )
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;