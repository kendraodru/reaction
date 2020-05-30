import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4'


//action creator
export const newMessage = text =>({
    type: NEW_MESSAGE,
    item: { id: uuid(), text, timestamp: Date.now()}
})