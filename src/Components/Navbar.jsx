import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <Link className='navbar-brand d-flex' to='/'>
                    <img src={logo} alt="Logo" />
                    <span className='ms-1 my-auto'>Todo</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
  