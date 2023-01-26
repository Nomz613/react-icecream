import React from 'react';
import './style.css';



function IceCreamFlavor(props){
    const FlavorListItems = props.favorite.map((favorite, index) => {
        return(
            <li key = {index + 1}>{favorite.name}</li>
        )
    }

    );
    return(
        FlavorListItems.favorite ? blue : pink
    );
}




export default IceCreamFlavor;