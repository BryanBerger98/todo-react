import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import logo from '../../logo.svg';

function Header() {

    const { currentUser, signoutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSignout = () => {
        signoutUser()
        .then(() => {
            navigate('/signin');
        }).catch(console.error);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <Link className='navbar-brand d-flex' to='/'>
                    <img src={logo} alt="Logo" width="40" height="40" className='my-auto' />
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
                        { currentUser ?
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle btn btn-link" type='button' id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    { currentUser.displayName ? currentUser.displayName : 'Me' }
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className='dropdown-item' to='/account'>Account</Link>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item btn btn-link text-danger" type='button' onClick={onSignout}>Log out</button></li>
                                </ul>
                            </li>
                            : null
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Header;
  