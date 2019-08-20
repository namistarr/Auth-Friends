import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

function FriendInfo(props) {       

    return(
        <div>
            {props.isLoading ? (
                    <Loader 
                        type='Oval'
                        color='pink'
                        height={50}
                        width={50}
                    />
                ) : (
                    props.friends.map((friend, index)  => (
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