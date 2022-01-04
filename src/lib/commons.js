import axios from "axios";
import { TENANT, URLAPI } from "../../api_client/config_client";


export const axiosRequest =(query, variables)=>{
  return axios({
      url: URLAPI,
      method: 'post',
      headers:{'Content-Type': 'application/json', 'current-tenant': TENANT},
      data: {
        query: query,
          variables: variables
      }
    })
}