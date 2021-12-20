import React, {useState, useEffect} from "react";
import { RadioBrowserApi } from 'radio-browser-api';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import Button from 'react-bootstrap/Button';

import { AiFillStepBackward } from 'react-icons/ai';
import { AiFillStepForward } from 'react-icons/ai';

import styled from "styled-components";

const Styles = styled.div`

    {
        display: flex;
        align-items: center;
    }

    .btn {
        font-size: 1.5em;
        background-color: rgb(0,0,0,0);
        border: none;
    }

    .btn:hover {
        color: #F2BB15;
    }

    .btn:focus {
        box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
    }

    p {
        color: #FFFFFF;
        width: 20vw;
        margin-bottom: 0;
        text-align: center;
    }

    .rhap_container.controls {
        background-color: rgb(0,0,0,0);
        width: 15vw;
    }

    .rhap_stacked .rhap_controls-section {
        margin-top: 0;
    }

    .rhap_main-controls:hover {
        fill: #F2BB15;
    }

    .rhap_main-controls button[aria-label="Play"] svg path {
        fill: #FFFFFF;
    }

    .rhap_main-controls button[aria-label="Play"]:hover svg path {
        fill: #F2BB15;
    }

    .rhap_main-controls button[aria-label="Pause"] svg path {
        fill: #F2BB15;
    }

    .rhap_volume-controls svg path {
        fill:  #FFFFFF;
    }

    .rhap_volume-bar{
        background-color:  #5A5A5A;
    }

    .rhap_volume-indicator{
        background-color:  #FFFFFF;
    }

`;

function Radio() {
    const [stations, setStations] = useState();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setupApi().then((data) => {
            setStations(data);
        });
    }, []);

    const setupApi = async () => {
        const api = new RadioBrowserApi(fetch.bind(window), "Jam-Session");

        const stations = await api
        .searchStations({
            language: "english",
            tag: "jazz",
            limit: 9
        })
        .then((data) => {
            return data;
        });

        return stations;
    };

    function handleForward () {
        if (index === stations.length-1) {
            setIndex(0);
        } else {
            setIndex(index+1);
        };
    };

    function handleBackward () {
        if (index === 0) {
            setIndex(stations.length-1);
        } else {
            setIndex(index-1);
        };
    };

    
    return (
        <Styles>
            {stations &&
                (
                    <Styles>
                        <Button onClick={handleBackward} > <AiFillStepBackward /> </Button>
                        <p>{index + 1}: {stations[index].name}</p>
                        <Button onClick={handleForward} > <AiFillStepForward /> </Button>
                        <AudioPlayer
                            className="controls"
                            src={stations[index].urlResolved}
                            showJumpControls={false}
                            customProgressBarSection={[]}
                            customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                            autoPlayAfterSrcChange={true}
                        />
                    </Styles>
                )
                
            }
        </Styles>
    )
}

export default Radio;