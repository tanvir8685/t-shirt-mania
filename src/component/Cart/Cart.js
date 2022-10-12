import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveItem}) => {
    let message;
    if(cart.length===0){
        message=<p>Please Buy any thing</p>
    }
    else if(cart.length===1){
        message=<div>
            <h3>Amr jonno akta naw</h3>
            <p>Tmr nijer jonno akta naw</p>
        </div>
    }
    else{
        message=<p>Thanks for buying</p>
    }
    return (
        <div>
            <h2 className={cart.length===2||`orange`}>Order Summary</h2>
            <h5>Order quantity {cart.length}</h5>
            {
                cart.map(tshirt=><p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length===3?<p>You added 3 item keep going on</p>:<p>Buy more</p>
            }
            {cart.length===5 && <h2>Wow yo added 5 item</h2>}
        </div>
    );
};

export default Cart;