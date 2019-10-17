import React from 'react'

export default function Blog() {
    return (
        
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
                        <img src="/img/sittingRoom.jpg" height="270" width="490" className="card-img-top" alt="pool" />
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
    )
}
