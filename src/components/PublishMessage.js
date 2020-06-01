import React, { useState } from 'react';
import { useAppContext } from './hooks'
import { newMessage } from '../state/actions';

function PublishMessage(){
    const { pubsub: { publish}, state: { username} } = useAppContext();
    // const { dispatch } = useContext(Context);
    // const { dispatch } = props;

    const [text, setText] = useState('');

    const updateText = event =>{
        setText(event.target.value);
    }

    const publishMsg = ()=>{
        publish(newMessage({text, username}));
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') publishMsg()
    }


    return(
        <div>
            <h3>Got something to say?</h3>
            <input value={text} onChange={updateText} onKeyPress={handleKeyPress}/>
            {' '}
            <button onClick={publishMsg}>Publish it!</button>
        </div>
    )
};

export default PublishMessage;