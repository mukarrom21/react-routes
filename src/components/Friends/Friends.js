import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data));
    },[])
    return (
        <div>
            <h2>Hello Friends</h2>
            <h4>My friends are: {friends.length}</h4>
            {
                friends.map(friend=> <Friend 
                    key={friend.id}
                    friend={friend}
                />)
            }
        </div>
    );
};

export default Friends;