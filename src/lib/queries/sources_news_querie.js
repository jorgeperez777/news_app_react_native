export const GET_SOURCES_LIST = `
query($filter: NewsFilter){
    sources(filter: $filter){
      id
      name
      active
      slug
  
    }
  }
  
`;
