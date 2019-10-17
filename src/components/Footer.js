import React from 'react'

export default function Footer() {
    const styles={
        color:"whitesmoke",
        margin:"0px"
    }
    return (
        <div className="row bg-dark footer" style={styles}>
            <div className="col-sm-3">
              <p>Site Map</p>
              <p>Terms and Condition</p>
              <p>Privecy policy</p>
              <p>Help</p>
              <p>Affiliation</p>
            </div>
            <div className="col-sm-3">
                <p>Our Location</p>
                <p>Career</p>
                <p>About </p>
                <p>Contact </p>
            </div>
            <div className="col-sm-3">
                <p>Faq</p>
                <p>Blog</p>
                <p>Car Blog</p>
                <p>Location</p>
                <p>Press</p>
            </div>
            <div className="col-sm-3">
                <p>Signe up to get our newsletter</p>
                <input type="text" placeholder=" your email..."/>
                <hr />
            </div>
            <hr />
            <div className="row mt-20 social-media">
                <div className="col-sm-3"><i class="fab fa-facebook-square"></i></div>
                <div className="col-sm-3"><i class="fab fa-twitter"></i></div>
                <div className="col-sm-3"><img src="/img/google+.png" width="20" alt="google" /></div>
                <div className="col-sm-3"><i class="fab fa-instagram"></i></div>
            </div>
        </div>
    )
}
