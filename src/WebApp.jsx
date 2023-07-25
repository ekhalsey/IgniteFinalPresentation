import React, { useState } from "react";
import oldTakoUi from './takoImages/oldTakoUi.jpg'
import './css/WebApp.css'
import Vulnerabilities from './takoImages/vulnerabilities.jpg'
import Warn from './takoImages/warn.jpg'
import Vite from './takoImages/vite.jpg'
import CRA from './takoImages/CRA.jpg'
import OldFile from './takoImages/oldFileStructure.jpg'
import NewFile from './takoImages/newFileStructure.jpg'
import ClassComp from './takoImages/classComp1.jpg'
import FunctComp from './takoImages/functionalcomp.jpg'


export default function WebApp() {
    const [isDemo1Collapsed, setIsDemo1Collapsed] = useState(false);
    const [isDemo2Collapsed, setIsDemo2Collapsed] = useState(false);
    const [isDemo3Collapsed, setIsDemo3Collapsed] = useState(false);
    const [isDemo4Collapsed, setIsDemo4Collapsed] = useState(false);
    const [isDemo5Collapsed, setIsDemo5Collapsed] = useState(false);

    function chooseImage() {
        if (isDemo1Collapsed) {
            return (
                <div>
                    <img src={Vulnerabilities} alt="vul"></img>
                    <br />
                    <img src={Warn} alt="" />
                </div>

            )
        } else if (isDemo2Collapsed) {
            return (
                <div>
                    <img src={CRA} alt="Create React App" />
                    <img src={Vite} alt="Vite"/>
                </div>

            )
        } else if (isDemo3Collapsed) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"> <img src={OldFile} alt="" /></div>
                        <div className="col-md-6"> <img src={NewFile} alt="" /></div>
                    </div>

                </div>
            )
        } else if (isDemo4Collapsed) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"> <img src={ClassComp} alt="" /></div>
                        <div className="col-md-6"> <img src={FunctComp} alt="" /></div>
                    </div>

                </div>
            )
        // } else if (isDemo5Collapsed) {
        //     return (
        //         <div>
        //             <img src="" alt="" />
        //         </div>
        //     )
        } else {
            return (<img src={oldTakoUi} alt="screen cap"></img>
            )
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2">

                    <div className="border border-dark rounded">
                        <button className="btn btn-secondary" type="button" onClick={() => setIsDemo1Collapsed(!isDemo1Collapsed)}
                            data-bs-toggle="collapse" data-bs-target="#demo1" aria-expanded="false" aria-controls="collapseExample">1. Update</button>
                        <div id="demo1" className="collapse">
                            Dependency vulnerabilities
                        </div>
                    </div>
                    <br />
                    <div className="border border-dark rounded">
                        <button data-bs-toggle="collapse" data-bs-target="#demo2" onClick={() => setIsDemo2Collapsed(!isDemo2Collapsed)}
                            className="btn btn-secondary">2. Build Tools</button>
                        <div id="demo2" className="collapse">
                            From Create-React-App to Vite
                        </div>
                    </div>
                    <br />
                    <div className="border border-dark rounded">
                        <button data-bs-toggle="collapse" data-bs-target="#demo3" onClick={() => setIsDemo3Collapsed(!isDemo3Collapsed)}
                            className="btn btn-secondary">3. Simplify</button>
                        <div id="demo3" className="collapse">
                            <p>simpler state handling</p>
                            <p>fewer files, same functionality</p>
                        </div>
                    </div>
                    <br />
                    <div className="border border-dark rounded">
                        <button data-bs-toggle="collapse" data-bs-target="#demo4" onClick={() => setIsDemo4Collapsed(!isDemo4Collapsed)} className="btn btn-secondary">4. Modernize</button>
                        <div id="demo4" className="collapse">
                            From class-based React to modern function-based React
                        </div>
                    </div>
                    <br />
                    <div className="border border-dark rounded">
                        <button data-bs-toggle="collapse" data-bs-target="#demo5" onClick={() => setIsDemo5Collapsed(!isDemo5Collapsed)}
                            className="btn btn-secondary">5. Add on</button>
                        <div id="demo5" className="collapse">
                            Predictive element: Will driver be late?
                        </div>
                    </div>
                </div>
                <div className="col-xl-10">
                    <h3>Tako-Ui</h3>
                    {chooseImage()}
                </div>
            </div>
        </div>
    )
}