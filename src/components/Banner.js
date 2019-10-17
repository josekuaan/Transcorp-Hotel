import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="hero-image">
                <div className="banner mt-10">
                    <p>WELCOME TO </p>
                    <h1> Transcorp Hotel</h1>
                    <p>A place to experience and enjoy life</p>
                    <img src="/img/ic-play-circle-outline.png" alt="" />
                </div>

            </div>
            <div className=" row log mx-auto">
                <div className="col-sm-3">
                    <p className="check-in checks">CHECK-IN</p>
                    <p ><span className="date">24</span>/JUN <i class="fa fa-angle-down"></i></p>
                </div>
                <div className="col-sm-3">
                    <p className="checks">CHECK-OUT</p>
                    <p ><span className="date">29</span> /JUN  <i class="fa fa-angle-down"></i></p>
                </div>
                <div className="col-sm-3">
                    <p className="checks">GUSTS</p>
                    <p><span className="date">03</span><i class="fa fa-angle-down"></i></p>
                </div>
                <div className="col-sm-3 promotion">
                    <p>Have a promotional code ?</p>
                    <div className="available">CHECK AVAILABILITY</div>
                </div>
            </div>
        </>
    )
}
