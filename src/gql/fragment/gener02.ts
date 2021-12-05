import { gql } from '@apollo/client';

export const gener02Fragment = gql`
  fragment Gener02Fragment on Gener02 {
    firstName
    lastName
    email
    password
    roles {
      role
      description
    }
  }
`;
