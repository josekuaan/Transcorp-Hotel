import React from 'react'

export default function Main() {
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
         <div className="container">
        <section className=" mt-10">
                <h3 className="about-us-heading">About us</h3>
          <p className="sub-heading">A best place to enjoy your life</p>
          <div className="row mx-auto aboutUs">
             <p className="description">
                Transpcorp hotel is situated at the heart of federal terrotery, 40 minutes drive from 
                The Nnamdi Azikiwe international Air port Abuja. It it 670-Room,5-star hotel that provide luxury accomodation
                exoctic cusine and fully equipped meeting rooms and to business travellers,tourists from all over the world.
             </p>
          </div>
        </section>
        <section className="mt-15 our-photos">
          <img src="/img/rectangle-7.png" alt="photos" />
         
          <div className="bitmapImage"><a href="more.html">VIEW MORE PHOTOS</a></div>
        </section>
        <section class="row Rooms">
            <div className="col-sm-6">
                <h3 className="discover-our-room">DISCOVER OUR ROOMS</h3>
                <h1 className="luxury">Luxury interior</h1>
                <div className="row room_photo firstInterior">
                    <div className="col-sm-6 ">
                    <img src="/img/rectangle-8.png" width="115"  alt="Room" />
                  </div>
                  <div className="col-sm-6">
                        <p className="caption">Classic Rooms</p>
                        <p className="pricePerNight">Starting <strong>$40.00</strong>/Night</p>
                  </div>
                  </div>
                  <div className="row mt-10 room_photo">
                    <div className="col-sm-6 grandDeluxe">
                        <img src="img/King_Guest_Room1.jpg" width="115" alt="KingRoom" />
                    </div>
                    <div className="col-sm-6">
                        <p className="caption">Grand Deluxe  Rooms</p>
                        <p className="pricePerNight">Starting from <strong>$40.00</strong>/Night</p>
                    </div>
                </div>
                <div className="row room_photo ultraSuprior mt-10">
                    <div className="col-sm-6 ">
                        <img src="/img/sittingRoom.jpg" width="115" alt="sittingRoom" />
                    </div>
                    <div className="col-sm-6">
                        <p className="caption">Ultra Suprior Rooms</p>
                        <p className="pricePerNight">Starting from <strong>$40.00</strong>/Night</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 luxury-room">
                <img src="/img/rectangle-8.png" width="450"alt="Room" /> 
            </div>
        </section> 
                <section className=" mt-10 bg-light mx-alto testimonies-section">
            <div class="testimonies">
                <h3 className="about-us-heading">Testimonies</h3>
                <p className="sub-heading">What guests say</p>
                <div className="row mx-auto aboutUs">
                    <p className="description">
                    “Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Fusce commodo
                        urna id neque finibus, ac sollicitudin arcu
                        tempus. In hac habitasse platea dictumst”.            
                    </p>
                    <img src="img/oval.png" alt="person" className="oval"/>
                    <h4>FARAH WILLIAMS</h4>
                </div>
            </div>
        </section> 
                 <section className=" mt-10 bg-light">
                    <h3 className="about-us-heading">Latest From Our Blog</h3>
                    <div className="card-group">
                        <div className="card  ">
                            <img src="/img/rectangle-4.png" className="card-img-top" alt="pool" />
                                <div className="card-body">
                                <h5 className="card-title April-10th-2018">April 18 2018</h5>
                                <p className="card-text">Five Reason to stay at the beautiful hotel</p>
                                <p className="read">Continue <i class="fa fa-arrow-right"></i></p>
                                
                            </div>
                        </div>
                        <div className="card cards">
                            <img src="/img/sittingRoom.jpg" height="220" width="490" className="card-img-top" alt="pool" />
                            <div className="card-body">
                                <h5 className="card-title April-10th-2018">April 18 2018</h5>
                                <p className="card-text">Five Reason to stay at the beautiful hotel</p>
                                <p className="Continue">Continue <i class="fa fa-arrow-right"></i></p>
                            </div>
                        </div>
                        <div className="card cards">
                            <img src="/img/rectangle-4-copy-7.png" className="card-img-top" alt="pool" />
                            <div className="card-body">
                                <h5 className="card-title April-10th-2018">April 18 2018</h5>
                                <p className="card-text">Five Reason to stay at the beautiful hotel</p>
                                <p className="Continue">Continue <i class="fa fa-arrow-right"></i></p>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row">
                    <div className="col-sm-6 luxury-room">
                        <img src="/img/rectangle-12-copy.png" width="450" alt="Room" />
                    </div>
                    <div className="col-sm-6">
                        <h3 className="discover-our-room">DISCOVER OUR ROOMS</h3>
                        <h1 className="luxury">Luxury interior</h1>
                        <div className="row room_photo firstInterior">
                            
                            <div className="Address">
                                <p className="caption"><span className="Abuja">Abuja</span>, Nigeria</p>
                                <p className="pricePerNight">Address: 1 Aguyi Ironsi Abuja 9000001,Nigeria</p>
                                <p className="caption">Email: info@transcorphotel.com</p>
                                <p className="caption">call directly: +009876543</p>
                            </div>
                        </div>
                       
                    
                    </div>
                </section>
                </div>
        </>
    )
}
