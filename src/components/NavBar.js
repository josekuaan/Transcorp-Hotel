import React from 'react'
import {Link,} from 'react-router-dom'


 function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mx-auto bg-white "> 
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item nav-link active" ><Link to="/">HOME </Link></li>
                        <li className="nav-item nav-link"><Link to="about" >AbOUT US</Link></li>
                        <li className="nav-item nav-link" ><Link to="ourRooms">OUR ROOMS</Link></li>
                        <li className="nav-item nav-link"><img src="/img/transcorp-1.png" alt="logo" /></li>
                        <li className="nav-item nav-link"><Link to="reservation">RESERVATION </Link></li>
                        <li className="nav-item nav-link" ><Link to="blog">BLOG</Link></li>
                        <li className="nav-item nav-link" ><Link to="contact">CONTACT</Link></li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}


export default NavBar;