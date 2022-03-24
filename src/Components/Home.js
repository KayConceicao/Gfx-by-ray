import React, { useState} from "react";

// Components 
import ArtDetail from "./ArtDetail";
import Library from "./Library";

// Data
import data from "../data";

function Home() {
    // State
    const [artPieces, setArtPieces] = useState(data());
    const [currentArt, setCurrentArt] = useState(artPieces[0]);
    const [libraryStatus, setLibraryStatus] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
  
        <div  className="app">
            
            <div>
                <div className="home-header">
                    <h2>GRAPHICS BY</h2>
                    <h3>RacheaL</h3>
                </div>  
            </div>  
            
            <Library setButtonPopup={setButtonPopup} libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} artPieces={artPieces} setArtPieces={setArtPieces} setCurrentArt={setCurrentArt} />
            <ArtDetail currentArt={currentArt} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} artPieces={artPieces} />       
        </div>
    )
};

export default Home;