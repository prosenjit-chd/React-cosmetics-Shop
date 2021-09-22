import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';
import './cosmetic.css'

const Cosmetic = (props) => {



    const { name, price, gender, _id } = props.cosmetic;
    const handlePurchase = id => {
        //set to local stoage
        console.log(id);
        addToDb(id);
    }

    const handleRemove = id => {
        deleteFromDb(id);
    }

    return (
        <div className="cosmetic-design">
            <h1>Product Name: {name}</h1>
            <p>Product ID: {_id}</p>
            <h2>Price: ${price}</h2>
            <p><small>Gender: {gender}</small></p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;