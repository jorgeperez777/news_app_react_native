import { combineReducers } from "redux";
import configDevice from './config_devices_resucer';

const reducers = {
    config: configDevice
}

export default combineReducers(reducers)