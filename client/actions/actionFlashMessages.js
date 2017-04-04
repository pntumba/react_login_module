import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

export function addFlashMessageAction(message){
    return {
        type: ADD_FLASH_MESSAGE, 
        message
    };
}

export function deleteFlashMessageAction(id){
    return {
        type: DELETE_FLASH_MESSAGE,
        id
    };
}