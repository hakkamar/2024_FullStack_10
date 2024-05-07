import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      user {
        id
        username
        createdAt
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
      rating
      text
      user {
        id
        username
        createdAt
        reviewCount
        reviews {
          edges {
            node {
              id
              rating
              repositoryId
              text
              user {
                username
              }
            }
          }
        }
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`;
