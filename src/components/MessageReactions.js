import React from 'react';

function MessageReactions ({ messageReactions}) {

    if (!messageReactions) return null;

    return (
        messageReactions.map(reaction =>{
            const { id, emoji, username } = reaction;
            return(
                <span key={id}>
                    <em>{username}:</em>
                    {emoji}
                </span>
            )
        })
    )

}

export default MessageReactions;