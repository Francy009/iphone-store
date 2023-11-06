import React from 'react';
import logo from '../resource/logo.svg';
import { Link } from 'react-router-dom';



function Navbar() {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/">
                    <img src={logo} alt="" width="100" height="75" className="d-inline-block align-text-top" style={{ backgroundColor: 'white' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/contattaci">
                            <p className="nav-link" >Contattaci</p>
                        </Link>
                        <Link to="/chisiamo">
                            <p className="nav-link" >Chi siamo</p>
                        </Link>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar