import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendInfo from './FriendInfo';

function Friends(props) {
    const [friend, setFriend] = useState({ name:'', age:'', email:'' });
    const [newFriend, setNewFriend] = useState({});
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = event => {
        //console.log(friend);
        setFriend({ ...friend,
            [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', friend)
            .then(response => setFriends(response.data))
            .catch(error => console.log(error))

            setNewFriend({ ...friend })
            setFriend({ name:'', age:'', email:'' })
    }    

    useEffect(() => {
        setIsLoading(true);
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            setIsLoading(false);
            setFriends([...response.data]);
        })
        .catch(error => {
            setIsLoading(false);
            console.log(error);
        })
    }, [])

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
            <FriendInfo newFriend={newFriend} friends={friends} isLoading={isLoading}/>
        </div>
    )    
}

export default Friends;