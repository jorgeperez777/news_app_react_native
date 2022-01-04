import {UPDATE_CONFIG_MOBILE} from '../actions/types';

const initialStore ={
    configDevices: {}
}

export default(state = initialStore, action) =>{
    const {type, configDevices} = action;
    switch (type) {
        case UPDATE_CONFIG_MOBILE:
            return {
                ...state,
                configDevices
            };
        default:
            return state;
    }
}