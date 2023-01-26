import React from 'react'
import IceCreamList from './IceCreamList';
import IceCreamTitle from './IceCreamTitle';
import IceCreamFlavor from './IceCreamFlavor';

function App(){
    const icecream = {
        title: 'Ice Cream Flavors',
        feedback: {
            rating: 4.8
        },
        flavors: [
            { name: 'Strawberry', favorite: false },
            { name: 'Chocolate', favorite: false },
            { name: 'Pistachio', favorite: false },
            { name: 'Rocky Road', favorite: true },
            { name: 'Cookie Dough', favorite: true },
        ]
    };
    return(
      <IceCreamTitle title = {icecream.title} feedback = {icecream.feedback}/>,
      <IceCreamList flavors = {icecream.flavors}/>, <IceCreamFlavor favorite = {icecream.favorite}/>
    )
}

export default App;
