import React from "react";
import { NavLink } from "react-router-dom";

function About() {
    return (
        <>
            <div className="container-fluid background-color-light-blue">
                <div className="row">
                    <div className="col-12">
                        <h2>Jam Session Rules</h2>
                        <ol>
                            <li>Don't be a solo hog. Say what you have to say in as few choruses as possible.</li>
                            <li>Don't cut another soloist off by jumping in.</li>
                            <li>If you don't know the tune, don't solo. Nobody wants to hear a person who hasn't paid their dues on their horn make a complete fool of himself by trying to make every one think he knows how to play.</li>
                            <li>Don't tell the leader what to do. It's their Jam. Not yours. You can always get your own jam someday.</li>
                            <li>Know when to play.</li>
                            <li>Know when to sit down and chill out and enjoy the other players.</li>
                            <li>Have respect for the other soloists ideas by not doodling' around on your ax when they are playing.</li>
                            <li>If the other players start to riff behind the soloist, then go ahead and join in, but remember the balance, don't cover the soloist up.</li>
                            <li>Remember the solo order so when fours come up, everybody gets a turn.</li>
                            <li>The Bass doesn't need a solo on every tune.</li>
                            <li>If there is more than one horn present don't all play the melody in unison. Use different harmony parts and chord tones to create interest.</li>
                            <li>When playing a Ballad, split up the choruses in half, so the tune isn't an hour long.</li>
                            <li>Don't insist on staying up on stage all night. Play your 3 or 4 songs and make room for the other soloists who haven't played yet.</li>
                            <li>Never be critical of another person on the bandstand. If you have something to say to someone about their pitch, tone, sense of time, or what ever, wait until the break.</li>
                            <li>Never be a mike hog. Always share.</li>
                            <li>Don't call tunes in order to impress somebody. No one wants to hear Carla Bley Tunes with no Bar Lines performed at the speed of Cherokee. Or Anthony Braxton tunes performed with a polka feel.</li>
                            <li>Learn some tunes that you love, and do them.</li>
                            <li>Don't judge other people's tunes. If you hate the song Stella by Starlight, instead of complaining about it, go sit down and take a break.</li>
                            <li>As a horn player, when the singer sings don't play. It's ok to fill in between their phrases as long as it's done tastefully.</li>
                            <li>Use space. Don't play every Jamie Abersold lick that you know in the first three minutes. Save some ideas for later.</li>
                            <li>Be Mature. A jam is supposed to be about mutual respect for all the players regardless of ability, and not just a cutting contest. There is no room for "Higher, louder, faster," types of players who want to show off.</li>
                            <li>If the person ahead of you just took 8 choruses on the blues, don't try to "better" him by playing more if you have nothing to say.</li>
                            <li>Play in tune with each other. Don't have the attitude that "I'm right, Everyone else is Flat".</li>
                            <li>When ending a tune, look to the Bass or piano player for signs as to which type of ending will be used. Is it the 3 times a charm ending? Or that everybody stops at the same time with tight cut off ending? Is the rhythm section going to put a turn around at the end and vamp for a while ending? Turn on your radar.</li>
                        </ol>
                        <h6>Good Luck and have fun!</h6>
                        <NavLink exact to="/jams">Let's jam!</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;