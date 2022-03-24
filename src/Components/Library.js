import React from "react";
import LibraryArt from "./LibraryArt";

const Library = ({artPieces, setCurrentArt, setArtPieces, libraryStatus, setButtonPopup, setLibraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            {artPieces.map(piece =>  (
                <LibraryArt setButtonPopup={setButtonPopup} setArtPieces={setArtPieces} artPieces={artPieces} piece={piece} setCurrentArt={setCurrentArt} setLibraryStatus={setLibraryStatus} id={piece.id} key={piece.id}/>
            ))}
        </div>
    );
};

export default Library;