import React from 'react'

export default function PricingPage() {
    return (
          <>
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
                            <img src="/img/rectangle-8.png" width="115" alt="Room" />
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
                    <img src="/img/rectangle-8.png" width="450" alt="Room" />
                </div>
            </section>
        </> 
    )
}
