import {UPDATE_CONFIG_MOBILE} from './types'

export const updateConfigDevices = (configDevices) => {
    return {
        type: UPDATE_CONFIG_MOBILE,
        configDevices
    }
}