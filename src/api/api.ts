import { gql } from "@apollo/client";

export const request = async (client: any) => {
  return await client.query({
    query: gql`
      query ($first: Int!, $location: String!, $endCursor: String) {
        search(query: $location, type: USER, first: $first, after: $endCursor) {
          userCount
          edges {
            cursor
            node {
              ... on User {
                login
                name
                avatarUrl
                followers {
                  totalCount
                }
                repositories {
                  totalCount
                }
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    `,
  });
};

export const FEED_QUERY = gql`
  query ($first: Int!, $location: String!, $endCursor: String) {
    search(query: $location, type: USER, first: $first, after: $endCursor) {
      userCount
      edges {
        cursor
        node {
          ... on User {
            login
            name
            avatarUrl
            followers {
              totalCount
            }
            repositories {
              totalCount
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
