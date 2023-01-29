import React from 'react';
import './style.css';



// function IceCreamFlavor(props){
//     const FlavorListItems = props.favorite.map((favorite, index) => {
//         return(
//             <li key = {index + 1}>{favorite.name}</li>
//         )
//     }

//     );
//     return(
//         FlavorListItems ? pink : blue
//     );
// }

function IceCreamFlavor(props){
    return(
        <article>
            <h1>{props.title}</h1>
            <h3 className ={props.flavors.name = 'Strawberry' ? 'pink' : 'blue' }>flavors</h3>
        </article>
    )
}




export default IceCreamFlavor;