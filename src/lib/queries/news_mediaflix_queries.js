export const GET_NEWS_LIST = `
  query ($filter: NewsFilter) {
    news(filter: $filter) {
      id
      body
      title
      publishDate
      status
      slug_name
      source {
        id
        name
        slug
      }
      media {
        images {
          url
        }
        videos {
          url
        }
      }
    }
  }
`;
