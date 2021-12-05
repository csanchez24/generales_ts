import { gql } from '@apollo/client';
import { gener02Fragment } from './fragment';

gql`
  query Gener02($id: Int!) {
    gener02(id: $id) {
      ...Gener02Fragment
    }
  }
  ${gener02Fragment}
`;
