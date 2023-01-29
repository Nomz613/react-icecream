import React from 'react';
import './style.css';



function IceCreamFlavor(props){
    const FlavorListItems = props.flavors.map((flavor, index) => {
        return(
            <li key = {index + 1} className = {flavor.name === 'Strawberry' ? 'pink' : 'blue'}>{flavor.name}</li>
        )
    });
    

return(
    <ul>
        {FlavorListItems}
    </ul>
)

};

// function IceCreamFlavor(props){
//     return(
//         <article>
//             <h1>{props.title}</h1>
//             <h3 className ={props.flavors.name = 'Strawberry' ? 'pink' : 'blue' }>{flavors.name}</h3>
//         </article>
//     )
// }




export default IceCreamFlavor;