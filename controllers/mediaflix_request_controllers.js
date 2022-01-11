import React from 'react';
import {axiosRequest} from '../src/lib/commons';
import {GET_SOURCES_LIST} from '../src/lib/queries/sources_news_querie';

export const get_sources_mediaflix = (query, params) => {
  axiosRequest(query, params).then(result => {
    // console.log({res: result.data.data});
    if (result.status == 200) {
      return result.data.data.sources;
    } else {
      return null;
    }
  });
};
