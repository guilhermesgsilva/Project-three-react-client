import React from "react";
import { NavLink } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from "styled-components";

const Styles = styled.div`
    
    .row{
        min-height: 80vh;
    }

    .col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    h1 {
        text-align: center;
        margin-top: 20vh;
        font-size: 8.5rem;
        font-family: "Caveat";
        color: #fee;
        text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #F2BB15, 0 0 0.5em #F2BB15, 0 0 0.1em #F2BB15, 0 10px 3px #000;
    }

    h1 span {
        animation: blink linear infinite 2s;
    }

    h1 span:nth-of-type(2) {
        animation: blink linear infinite 3s;
    }

    @keyframes blink {
        78% {
            color: inherit;
            text-shadow: inherit;
        }
        79%{
            color: #333;
        }
        80% {
            text-shadow: none;
        }
        81% {
            color: inherit;
            text-shadow: inherit;
        }
        82% {
            color: #333;
            text-shadow: none;
        }
        83% {
            color: inherit;
            text-shadow: inherit;
        }
        92% {
            color: #333;
            text-shadow: none;
        }
        92.5% {
            color: inherit;
            text-shadow: inherit;
        }
    }

    h3 {
        color: rgba(255,255,255,0.8);
        text-align: center;
        font-size: 1.75rem;
        margin-top: 7.5vh;
        font-family: "Caveat";
    }

    #learn-more {
        font-size: 1rem;
        background-color: rgba(255,255,255,0.1);
        margin-top: 1vh;
        margin-bottom: 5vh;
        color: rgba(255,255,255,0.8);
        text-decoration: none;
        padding: 10px 10px 5px;
        border-radius: 5px;
    }

    #learn-more:hover {
        color: #F2BB15;
    }

`;

function Cover(props) {
    return (
        <Styles>
            <Row>
                <Col>
                    <h1 class="logo">J<span>a</span>m Se<span>ss</span>ion</h1>
                    <h3>Connect with other musicians to play!</h3>
                    <NavLink id="learn-more" exact to="/about">Learn More</NavLink>
                </Col>
            </Row> 
        </Styles>
    );
};

export default Cover;