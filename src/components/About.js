import React from "react";
import { NavLink } from "react-router-dom";
import photo from "../assets/jazz-fest.jpeg"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import styled from "styled-components";

const Styles = styled.div`

    .row {
        min-height: 80vh;
    }

    .col {
        display: flex;
        justify-content: center;
    }

    .card {
        background-color: rgba(255,255,255,0.1);
        margin: 10vh;
        width: 60vw;
        font-family: "GillSans";
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 40vw;
        height: auto;
        margin-top: 5vh;
    }

    p {
        padding: 0 7.5vw;
    }

    span {
        color: #F2BB15;
    }

    ul {
        list-style-type: none;
    }

    #lets-jam {
        color: #FFFFFF;
        font-size: 2rem;
        font-family: "Caveat";
        text-decoration: none;
        margin-bottom: 2.5vh;
    }

    #lets-jam:hover {
        color: #F2BB15;
    }

`;

function About() {
    return (
        <Styles>
            <Row>
                <Col>
                    <Card>
                        <Image src={photo}/>
                        <br/>
                        <p>A <span>Jam Session</span> is an informal musical performance 
                        for musicians to interact with each other and make music in a relaxed environment, 
                        without the concern of pleasing the audience.</p>
                        <p> Rules and Etiquette:</p>
                        <ul>
                            <li>- Make sure you know how to play your instrument.</li>
                            <li>- Wait for your time to play.</li>
                            <li>- Don't cut another soloist off by jumping in.</li>
                            <li>- Don't be a solo hog.</li>
                            <li>- Listen to the other players.</li>
                            <li>- The Bass doesn't need a solo on every tune.</li>
                            <li>- Make room for others to play.</li>
                        </ul>
                        <p>Good Luck and have fun.</p>
                        <NavLink id="lets-jam" exact to="/">Let's jam!</NavLink>    
                    </Card>
                </Col>
            </Row>
        </Styles>
    );
};

export default About;
