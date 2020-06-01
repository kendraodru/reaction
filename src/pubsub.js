import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config.json'



//3 methods, subscribe, addlistener, publish

export const MESSAGE_CHANNEL = "MESSAGE_CHANNEL";

function PubSub(){
    const pubNub = new PubNub(pubnubConfig);

    pubNub.subscribe({ channels: [MESSAGE_CHANNEL]});

    this.addListener = listenerConfig =>{
        pubNub.addListener(listenerConfig)
    }

    this.publish = message =>{

        // console.log('publish message', message)

        pubNub.publish({
            message,
            channel: MESSAGE_CHANNEL
        })
    }
}


export default PubSub;

// pubNub.addListener({
//     message: (messageObject)=>{
//         console.log("messObj", messageObject);
//     }
// });

// setTimeout(()=> {
//     pubNub.publish({
//         message: 'foo',
//         channel: MESSAGE_CHANNEL
//     });
// }, 1000);


