import React from "react";
import { NavLink } from "react-router-dom";

function Cover() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Jam Session</h1>
                        <h3>Connect with other musicians to play</h3>
                        <NavLink exact to="/jams">Let's jam!</NavLink>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="http://placekitten.com/50/50" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="http://placekitten.com/51/51" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="http://placekitten.com/52/52" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-6">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="http://placekitten.com/50/50" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="http://placekitten.com/50/50" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="http://placekitten.com/50/50" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="http://placekitten.com/50/50" className="card-img-top" alt="..."/>
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