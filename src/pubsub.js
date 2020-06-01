import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config.json'

const pubNub = new PubNub(pubnubConfig);

//3 methods, subscribe, addlistener, publish

export const MESSAGE_CHANNEL = "MESSAGE_CHANNEL";

pubNub.subscribe({ channels: [MESSAGE_CHANNEL]});

pubNub.addListener({
    message: (messageObject)=>{
        console.log("messObj", messageObject);
    }
});

pubNub.publish({
    message: 'foo',
    channel: MESSAGE_CHANNEL
})
