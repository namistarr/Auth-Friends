import React, { useState } from 'react';

function Friends(props) {
    const [friend, setFriend] = useState({ name:'', age:'', email:'' });

    const handleChange = event => {
        console.log(friend);
        setFriend({ ...friend,
            [event.target.name]: event.target.value })
    }
    return (
        <div>
            <div>
                <form>
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
        </div>
    )    
}

export default Friends;