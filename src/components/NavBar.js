import React from 'react'

 function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mx-auto bg-white "> 
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item nav-link active" >HOME</li>
                        <li className="nav-item nav-link">AbOUT US</li>
                        <li className="nav-item nav-link" >OUR ROOMS</li>
                        <li className="nav-item nav-link"><img src="/img/transcorp-1.png" alt="logo" /></li>
                        <li className="nav-item nav-link">RESERVATION</li>
                        <li className="nav-item nav-link" >BLOG</li>
                        <li className="nav-item nav-link" >CONTACT</li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;