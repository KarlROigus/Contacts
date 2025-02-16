import { Link } from 'react-router-dom';


export default function Navbar() {

    return <nav className="nav">

        <Link to="/" className="site-title">CONTACTS</Link>
        <ul>
            <li>
                <Link to="/persons">Persons</Link>  
            </li>
            <li>
                <Link to="/contacttypes">Contact Types</Link>
            </li>
        </ul>

    </nav>

}