import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';

function FriendInfo(props) {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState();

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

    return(
        <div>
            {isLoading ? (
                    <Loader 
                        type='Oval'
                        color='pink'
                        height={50}
                        width={50}
                    />
                ) : (
                    friends.map((friend, index)  => (
                        <div key={index} className='friend-info'>
                            <h3>{friend.name}</h3>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default FriendInfo;