import React, { useEffect, useState } from 'react';
import { add as addition, multiply } from '../../utilities/storage';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])


    return (
        <div>
            <h1 style={{color:'maroon'}}>Shop from my cosmetics Shop</h1>
            <h3> Check Local Storage to see save item </h3>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id}
                    cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;