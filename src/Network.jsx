import React from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Ryan from './networkImages/RyanCapture.jpg';
import Tiara from './networkImages/TiaraCapture.jpg';
import SamB from './networkImages/SamBCapture.jpg';
import SamT from './networkImages/SamTCapture.jpg';
import Arvind from './networkImages/ArvindCapture.jpg';
import Dan from './networkImages/DanCapture.jpg';
import './css/Network.css'

export default function Network() {

    return (
        <div className="container">
            <div className="row">
                <h3 className="heading">Networking</h3>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={SamB} className="d-block w-100" alt="Sam Brinthaupt" />
                            </div>
                            <div className="carousel-item">
                                <img src={Tiara} className="d-block w-100" alt="Tiara Duvall" />
                            </div>
                            <div className="carousel-item">
                                <img src={Ryan} className="d-block w-100" alt="Ryan Trullinger" />
                            </div>
                            <div className="carousel-item">
                                <img src={SamT} className="d-block w-100" alt="Sam Tihen" />
                            </div>
                            <div className="carousel-item">
                                <img src={Dan} className="d-block w-100" alt="Dan Lurkins" />
                            </div>
                            <div className="carousel-item">
                                <img src={Arvind} className="d-block w-100" alt="Arvind Rao" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>

    );
}