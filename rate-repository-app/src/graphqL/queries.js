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

export const GET_REPOSITORY_BY_ID = gql`
  query getRepo($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
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
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORIES_ILMAN_LAJITTELUA = gql`
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
export const GET_REPOSITORIES_BY_SEARCH = gql`
  query getRepot(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
export const GET_REPOSITORIES = gql`
  query getRepot(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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

export const MY_REVIEWS = gql`
  query MunReviewit($includeReviews: Boolean = false) {
    me {
      id
      username
      createdAt
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            repository {
              id
              fullName
            }
            createdAt
            rating
            text
          }
        }
      }
    }
  }
`;
