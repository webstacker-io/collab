import React from 'react'
import './header.scss';
export default function Header({ onToggleCollapse }: any) {
  return (
    <nav className="navbar  text-white shadow-sm p-3 mb-5 rounded" >
      <div className="container">
      <button onClick={onToggleCollapse} className="btn">
      <i className="bi bi-list"></i>
      </button>
        <a className="navbar-brand" href="#">
          {/* <img src="assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" /> */}
        </a>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
            <strong>Settings</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div> 
      </div>
    </nav>
  )
}
