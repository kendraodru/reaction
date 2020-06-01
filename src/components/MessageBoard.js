import React from 'react';
import { useAppContext } from './hooks'

function MessageBoard(){

    const { state: { messages } } = useAppContext();

    return(
        <div>
            {
                messages.map(msgItem =>{
                    const { id, text, timestamp, username } = msgItem;
                    return(
                        <div key={id}>
                            <h4>{new Date(timestamp).toLocaleString()}</h4>
                            <p>{text}</p>
                            <h4>- {username}</h4>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
};

export default MessageBoard