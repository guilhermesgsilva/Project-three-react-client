import React from "react";
import { NavLink } from "react-router-dom";

function Cover() {
    return (
        <>
            <div className="container-fluid background-color-light-blue">
                <div className="row">
                    <div className="col-12">
                        <h1>Jam Session</h1>
                        <h3>Connect with other musicians to play</h3>
                        <NavLink exact to="/jams">Let's jam!</NavLink>
                        <img src="http://placekitten.com/100/100"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-6">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-6">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <NavLink exact to="/about">Learn More</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cover;