import React from "react";
import Slate from './takoImages/slate.jpg';
import Work from './takoImages/workaholic.jpg';
import AWS from './takoImages/aws.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Ryan from './networkImages/RyanCapture.jpg';
import Tiara from './networkImages/TiaraCapture.jpg';
import SamB from './networkImages/SamBCapture.jpg';
import SamT from './networkImages/SamTCapture.jpg';
import Arvind from './networkImages/ArvindCapture.jpg';
import Dan from './networkImages/DanCapture.jpg';
import './css/network.css'
import './css/SummerProject.css'

export default function SummerProject() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Starting from scratch
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul className="bullets">
                    <li >Development process from an empty repository to a working app</li>
                    <li >Learn new technologies</li>
                  </ul>
                  <img src={Slate} alt="" className="stockimg" />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Trying to redo work
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul className="bullets">
                    <li>It's worth reading the documentation</li>
                    <li>Balance writing code vs recycling code</li>
                  </ul>
                  <img src={Work} alt="" className="stockimg" />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Goal: AWS Certification
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Working toward AWS Cloud Practitioner Certification</p>
                  <img src={AWS} alt="" className="aws"/>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Goal: Networking
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                  <div className="container">
                    <div className="row">
                    </div>
                    <div className="row">

                      <div>
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

                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Demo
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <button className="btn btn-danger" style={{width: '25%'}}><a href="http://localhost:5173/?clientId=5b6fd0aa-ce85-4a62-880c-11518e332e64&preAuthCode=fakeCode#" style={{color: "white"}}>Tako-Ui-Fe</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}