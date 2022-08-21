import { gql } from '@apollo/client';

// ADD NORMAL USER
export const ADD_NORMALUSER = gql`
  mutation addNormalUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $location: String!) {
    addNormalUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, location: $location) {
      token
      normalUser {
        _id
        firstName
        lastName
        email
        location
      }
    }
  }
`;