import React from "react";
import oldTakoUi from './takoImages/oldTakoUi.jpg'
import './css/WebApp.css'

export default function WebApp() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2">
                    <div className="border border-dark rounded">
                    <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#demo3" aria-expanded="false" aria-controls="collapseExample">Dependencies</button>
                        <div id="demo3" className="collapse">
                            sooooo many vulnerabilities
                        </div>
                    </div>
                    <br /> 
                    <div className="border border-dark rounded">
                        <button data-bs-toggle="collapse" data-bs-target="#demo1" className="btn btn-secondary">Build Tools</button>
                        <div id="demo1" className="collapse">
                            from Create-React-App to Vite
                        </div>
                    </div>
                    <br />
                    <div className="border border-dark rounded">
                        <button data-bs-toggle="collapse" data-bs-target="#demo4" className="btn btn-secondary">Simplify</button>
                        <div id="demo4" className="collapse">
                            mobx, and datastores, and snapshots, oh my
                        </div>
                    </div>
                    <br />
                    <div className="border border-dark rounded">
                        <button data-bs-toggle="collapse" data-bs-target="#demo2" className="btn btn-secondary">Modernize</button>
                        <div id="demo2" className="collapse">
                            from class-based React to more modern function-based React
                        </div>
                    </div>
                     <br />
                    <div className="border border-dark rounded">
                        <button data-bs-toggle="collapse" data-bs-target="#demo5" className="btn btn-secondary">Add on</button>
                        <div id="demo5" className="collapse">
                            predictive element - will driver be late?
                        </div>
                    </div>
                </div>
                <div className="col-xl-10">
                    <img src={oldTakoUi} alt="screen capture of old web app" />
                </div>
            </div>

        </div>
    )
}