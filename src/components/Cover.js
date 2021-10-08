import React from "react";
import { NavLink } from "react-router-dom";

function Cover() {
    return (
        <>
            <div className="container-fluid background-color-light-blue">
                <div className="row">
                    <div className="col-12 cover">
                        <h1 className="text-align-center">Jam Session</h1>
                        <h3 className="text-align-center">Connect with other musicians to play!</h3>
                        <p className="text-align-center"><NavLink exact to="/jams">Let's Jam</NavLink> | <NavLink exact to="/about">Learn More</NavLink></p>
                        {/* <img src="/jam-session.jpeg"/> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cover;