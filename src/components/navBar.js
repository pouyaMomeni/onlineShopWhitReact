import React from 'react'
import '../style/app.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
            <div className="container-fluid">
                <span className="navbar-brand" >انلاین شاپ</span>
                {/* <img src={require('../image/logo3.jpg')} id='logo-pic' /> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/' aria-current="page" >خانه</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='products' >محصولات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='form' >ثبت نام</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </span>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar