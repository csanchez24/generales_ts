import { gql } from '@apollo/client';

gql`
  query Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
    }
  }
`;
