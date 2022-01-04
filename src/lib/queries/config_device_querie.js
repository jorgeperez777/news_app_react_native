import {gql} from '@apollo/client';

export const GET_CONFIG_DEVICE = `
  query ($filter: AppConfigSectionFilter!) {
    appConfigSections(filter: $filter) {
      id
      live_stream
      vod
      news
      youtube
      specials
      more_options
      adbutler
      admob
      type_device
      social_networks {
        id
        type_social_network
        value
        value_id
        view_in_menu
      }
    }
  }
`;
