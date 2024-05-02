import { gql } from "@apollo/client";

/*
import { REPOSITORY_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      ${REPOSITORY_DETAILS}
      ...RepositoryDetails
    }    
  }
`;
*/

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      totalCount
      edges {
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
      createdAt
    }
  }
`;
