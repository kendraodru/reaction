import React, { useContext } from 'react';
import Context from '../context'

function MessageBoard(){

    const { state: { messages } } = useContext(Context);

    return(
        <div>
            {
                messages.map(msgItem =>{
                    const { id, text, timestamp } = msgItem;
                    return(
                        <div key={id}>
                            <h4>{new Date(timestamp).toLocaleString()}</h4>
                            <p>{text}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
};

export default MessageBoard