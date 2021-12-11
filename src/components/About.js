import React from "react";
import { NavLink } from "react-router-dom";

function About() {
    return (
        <>
            <div className="row background-color-light-blue">
                <div className="col-12">
                    <p>A <b>Jam Session</b> is an informal performance of music for players to interact with other players and make music in a freewheeling environment, without having to be concerned about pleasing an audience.</p>
                    <p>Rules:</p>
                    <ol>
                        <li>Make sure you know how to play your instrument.</li>
                        <li>Wait for your time to play.</li>
                        <li>Don't be a solo hog.</li>
                        <li>Don't cut another soloist off by jumping in.</li>
                        <li>The Bass doesn't need a solo on every tune.</li>
                        <li>Make room for others to play.</li>
                    </ol>
                    <p>Good Luck and have fun!</p>
                    <NavLink exact to="/">Let's jam!</NavLink>
                </div>
            </div>
        </>
    );
};

export default About;