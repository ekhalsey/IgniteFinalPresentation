import React from 'react';
import { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './css/styles.css';

export default function Home() {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Ignite Final Presentation</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/intro">Intro</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/network">Networking</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tictactoe">TicTacToe</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/webapp">Web App</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/project">Project</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}