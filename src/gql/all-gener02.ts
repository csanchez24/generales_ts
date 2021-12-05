import { gql } from '@apollo/client';
import { gener02Fragment } from './fragment';

gql`
  query AllGener02 {
    allGener02 {
      ...Gener02Fragment
    }
  }
  ${gener02Fragment}
`;
