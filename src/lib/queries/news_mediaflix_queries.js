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

export const GET_NEW_BY_ID = `
query($id: ID!){
  getNewsItem(id: $id){
    id
  body
  title
  publishDate
  status
  slug_name
  source{
    id
    name
    slug
  }
  media{
    images{
      url
    }
    videos{
      url
    }
  }

}
}

`;
