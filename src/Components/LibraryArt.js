import React from "react";

const LibraryArt = ({piece, artPieces, setCurrentArt, id, setArtPieces, setButtonPopup}) => {
    
    const artSelectHandler = async () => {
        await setCurrentArt(piece);

        // Active state
        const newPieces = artPieces.map((piece) => {
            if(piece.id === id){
                return{
                    ...piece,
                    active: true,
                };
            }else{
                return {
                    ...piece,
                    active: false,
                };
            }
        });
        setArtPieces(newPieces);
        
    };

    const buttonClick = () => {
        artSelectHandler();
        setButtonPopup(true)
    }
    
    return (
        <button className="art-lib-btn libraryArt" onClick={buttonClick}><div className={` ${piece.active ? 'selected' : ""}`}>
            <img src={piece.cover} alt={piece.name} />
        </div></button>
    );
};

export default LibraryArt;