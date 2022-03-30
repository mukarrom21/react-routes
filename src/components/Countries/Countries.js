import React from 'react';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[])
    return (
        <div>
            <h4>Welcome to rest Countries: {countries.length}</h4>
            {
                countries.map(country=> <p><Link to={country.name.common}>{country.name.common}</Link></p>)
            }
        </div>
    );
};

export default Countries;