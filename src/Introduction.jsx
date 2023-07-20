import React from "react";
import './css/Introduction.scss';
import headshotImage from './introImages/headshot.jpg';
import LCLogo from './introImages/LCRocket.jpg'
import SEImage from './introImages/SE.jpg'

export default function Introduction() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12"><h3 className="heading">Introduction</h3></div>
                </div>
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={headshotImage} alt="Headshot" className="card-img-top" />
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title">Emma Halsey</h5>
                                <p className="card-text text-dark"> spanish major</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={LCLogo} alt="Rocket" className="card-img-top" />
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title">LaunchCode</h5>
                                <p className="card-text">Women+ Part-Time Web Development Javascript/Java   </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={SEImage} alt="Software Engineer Illustration" className="card-img-top" />
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title">Software Engineer 1</h5>
                                <p>Carshare/Rideshare IT Department</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}