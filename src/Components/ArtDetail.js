import React from "react";
import ArtDetailGfx from "./ArtDetailGfx";

const ArtDetail = ({currentArt, buttonPopup, setButtonPopup}) => {
    return (buttonPopup) ? (
        <div className="info-container">
            <div className="info-container-inner">
                <div className="info-gfx">
                    {currentArt.gfx.map(gfx =>  (
                        <ArtDetailGfx gfx={gfx} currentArt={currentArt} key={gfx}/>
                    ))}
                </div>
                <h1>{currentArt.name}</h1>
                <p>{currentArt.bio}</p>
                <button className="close-btn" onClick={() => setButtonPopup(false)} >X</button>
                {buttonPopup.children}
            </div>
        </div>
    ) : "";
};

export default ArtDetail;