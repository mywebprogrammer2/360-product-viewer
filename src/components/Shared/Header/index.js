import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch()
  // const router = useRouter()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log( "isLoggedIn" );
  // console.log( isLoggedIn );

  // useEffect(() => {
  //   if(isLoggedIn === false){
  //     router.push('/login')
  //   }
  // }, [isLoggedIn])
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link href="/">
          <div className="navbar-brand">Tech Finder</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <div className="nav-link">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <div className="nav-link">About</div>
              </Link>
            </li>
            {
              (isLoggedIn) && <li className="nav-item">
                <Link href="/dashboard">
                  <div className="nav-link">Protected</div>
                </Link>
              </li>
            }
            {
              ( !isLoggedIn ) && <li className="nav-item">
                <Link href="/login">
                  <div className="nav-link">Login</div>
                </Link>
              </li>
            }
            {
              ( !isLoggedIn ) && <li className="nav-item">
                <Link href="/register">
                  <div className="nav-link">Register</div>
                </Link>
              </li>
            }

            {
              (isLoggedIn) && <li className="nav-item">
                <Link href="/logout" onClick={(event) => {
                  event.preventDefault()
                  dispatch(logout())
                }}>
                  <div className="nav-link">Logout</div>
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
