// components/Sidebar.js
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Sidebar = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const activeClass = (route) => {
    return router.pathname == route ? 'active' : '';
  }

  return (
    // <nav className="col-md-2 d-none d-md-block">
      <div className="sidebar-content">
        <div className="header">
          <h2>Sidebar Header</h2>
        </div>
        <div className="body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href="/360view" className={`nav-link ${activeClass('/360view')}`}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <div>360 View</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard" className={`nav-link ${activeClass('/dashboard')}`}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <div>Dashboard</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${activeClass('/about')}`}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <div>About</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${activeClass('/contact')}`}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <div>Contact</div>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/logout" className={`nav-link`} onClick={(event) => {
                  event.preventDefault()
                  dispatch(logout())
                }}>
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  <div>Logout</div>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    // </nav>
  )
}

export default Sidebar
