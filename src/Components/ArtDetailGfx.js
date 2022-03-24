import React from "react";

const ArtDetailGfx = ({gfx, currentArt}) => {
    return(
        <img src={gfx} alt={currentArt.name}></img>
    );
};

export default ArtDetailGfx;