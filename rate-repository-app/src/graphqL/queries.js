import { gql } from "@apollo/client";

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

export const GET_REVIEWS_BY_ID = gql`
  query getReviews($id: ID!, $first: Int, $after: String) {
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
      reviews(first: $first, after: $after) {
        totalCount
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
          cursor
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query getRepot(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
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
