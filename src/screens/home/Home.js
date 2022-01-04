import React from 'react';
import MainTab from '../../../navigations/MainTab';
import {connect} from 'react-redux';
import * as configActions from '../../../config/redux_config/actions/actions';
import PropTypes from 'prop-types';
import ActivityIndicatorGlobal from '../../lib/components/ActivityIndicatorGlobal';
import { axiosRequest } from '../../lib/commons';
import { GET_CONFIG_DEVICE } from '../../lib/queries/config_device_querie';
import {Platform} from 'react-native';


const Home = ({...props}) => {
  const {updateConfigDevices, configDevices, dataResponse} = props;
  const [isLoading, setStateLoading] = React.useState(true);
  
  axiosRequest(GET_CONFIG_DEVICE, {filter: {
    type_device: Platform.OS === 'android' ? 'ANDROID' : 'IOS',
  }}).then(result => {
    if (result.status == 200) {
      setStateLoading(false);
      updateConfigDevices(result.data.data);
    }
  }).catch(function(error) {
    // setStateLoading(false);
    });

  return isLoading ? (
    <ActivityIndicatorGlobal />
  ) : (
    <MainTab configDevices={configDevices} />
  );
};

Home.propTypes = {
  configDevices: PropTypes.object.isRequired,
  updateConfigDevices: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    configDevices: state.config.configDevices,
  };
};

const mapDispatchToProps = dispatch => ({
  updateConfigDevices: configDevices =>
    dispatch(configActions.updateConfigDevices(configDevices)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
