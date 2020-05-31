import React, { useState } from 'react';
import { useAppContext } from './hooks'
import { newMessage } from '../state/actions';

function PublishMessage(){
    const { dispatch } = useAppContext();
    // const { dispatch } = useContext(Context);
    // const { dispatch } = props;

    const [text, setText] = useState('');

    const updateText = event =>{
        setText(event.target.value);
    }

    const publishMsg = ()=>{
        dispatch(newMessage(text));
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