import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt,handleAddToCart}) => {
    const{name,picture,price}=tshirt;
    return (
        <div className='t-shirt
        '>
            <img src={picture}></img>
           <h1>{name}</h1> 
           <h4>Price:{price}</h4>
           <button onClick={()=>handleAddToCart(tshirt)} type="">Buy This</button>
        </div>
    );
};

export default TShirt;