import { Link } from 'react-router-dom'


const Header =()=> {
    return (
        <header className="is-flex is-justify-content-space-around is-align-items-center is-flex-wrap-wrap">
            <h1 className="is-size-2"><Link to="/" style={{color: "rgb(4, 185, 50)"}}>Plan Community</Link></h1>
            <nav>
                <ul>
                    <li>
                    <Link to="/signin" style={{color: "rgb(4, 185, 50)"}} >Sign In</Link> 
                    </li>
                    <li>
                    <Link to="/signup" style={{color: "rgb(4, 185, 50)"}} >Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;