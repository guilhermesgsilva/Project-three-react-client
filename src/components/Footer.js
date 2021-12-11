import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

import styled from "styled-components";

const Styles = styled.div`
    .row {
        background-color: rgba(255,255,255,0.1);
        color: #FFFFFF;
    }

    b {
        color: #F2BB15;
    }

    .nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
    }

    .footer-line {
        margin: 0;
        padding: 0.15rem;
    }

    .footer-link-logo {
        color: #FFFFFF;
    }

    .footer-link-logo:hover {
        color: #F2BB15;
    }

`;

function Footer() {
    return (
        <Styles>
            <Row>
                <Col>
                    <Nav>
                        <p className="footer-line" >Made by <b>Guilherme Silva</b></p>
                        <div className="footer-line" >
                            <a href="https://github.com/guilhermesgsilva" target="_blank" rel="noreferrer">
                                <BsGithub className="footer-link-logo" size={15} />
                            </a>
                            <span> | </span>
                            <a href="https://www.linkedin.com/in/guilherme-sg-silva/" target="_blank" rel="noreferrer">
                                <BsLinkedin className="footer-link-logo" size={15} />
                            </a>
                            <span> | </span>
                            <a href="mailto:silva.gsg@gmail.com" target="_blank" rel="noreferrer">
                                <GrMail className="footer-link-logo" size={17} />
                            </a>
                        </div>
                    </Nav>
                </Col>
            </Row>
        </Styles>
    );
};

export default Footer;