import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendInfo from './FriendInfo';

function Friends(props) {
    const [friend, setFriend] = useState({ name:'', age:'', email:'' });
    const [newFriend, setNewFriend] = useState({});

    const handleChange = event => {
        console.log(friend);
        setFriend({ ...friend,
            [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', friend)
            .then(response => console.log(response))
            .catch(error => console.log(error))

            setNewFriend({ ...friend })
            setFriend({ name:'', age:'', email:'' })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Name'
                        type='text'
                        name='name'
                        value={friend.name}
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Age'
                        type='number'
                        name='age'
                        value={friend.age}
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Email'
                        type='text'
                        name='email'
                        value={friend.email}
                        onChange={handleChange}
                    />
                    <button>Submit Friend</button>                        
                </form>
            </div>
            <FriendInfo newFriend={newFriend} />
        </div>
    )    
}

export default Friends;