import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data));
    },[countryName]);
    // const {name, population, flags} = country[0];
    const {flags, capital, name, population}=country[0] || {}
    return (
        <div>
            <h1>{countryName}</h1>
            <h3>Capital: {capital}</h3>
            <img src={flags?.png} alt="" />
            <p>Official Name: {name?.official}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;