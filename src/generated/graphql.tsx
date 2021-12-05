import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
};

export type CreateGener02Input = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Scalars['Float']>;
};

export type CreateGener05Input = {
  code: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Float'];
};

export type CreateGener21Input = {
  description: Scalars['String'];
  role: Scalars['String'];
};

export type Gener02 = {
  __typename?: 'Gener02';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Gener21>;
};

export type Gener05 = {
  __typename?: 'Gener05';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order: Scalars['Float'];
};

export type Gener21 = {
  __typename?: 'Gener21';
  description: Scalars['String'];
  id: Scalars['ID'];
  role: Scalars['String'];
  users: Array<Gener02>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGener02: Gener02;
  createGener05: Gener05;
  createGener21: Gener21;
};


export type MutationCreateGener02Args = {
  createGener02Input: CreateGener02Input;
};


export type MutationCreateGener05Args = {
  createGener05Input: CreateGener05Input;
};


export type MutationCreateGener21Args = {
  createGener21Input: CreateGener21Input;
};

export type Query = {
  __typename?: 'Query';
  allGener02: Array<Gener02>;
  allGener05: Array<Gener05>;
  allGener21: Array<Gener21>;
  gener02: Gener02;
  gener05: Gener05;
  gener21: Gener21;
  getProfile: Gener02;
  login?: Maybe<Auth>;
};


export type QueryGener02Args = {
  id: Scalars['Int'];
};


export type QueryGener05Args = {
  id: Scalars['Int'];
};


export type QueryGener21Args = {
  id: Scalars['Int'];
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};

export type AllGener02QueryVariables = Exact<{ [key: string]: never; }>;


export type AllGener02Query = { __typename?: 'Query', allGener02: Array<{ __typename?: 'Gener02', firstName: string, lastName: string, email: string, password: string, roles: Array<{ __typename?: 'Gener21', role: string, description: string }> }> };

export type Gener02FragmentFragment = { __typename?: 'Gener02', firstName: string, lastName: string, email: string, password: string, roles: Array<{ __typename?: 'Gener21', role: string, description: string }> };

export type Gener02QueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Gener02Query = { __typename?: 'Query', gener02: { __typename?: 'Gener02', firstName: string, lastName: string, email: string, password: string, roles: Array<{ __typename?: 'Gener21', role: string, description: string }> } };

export type LoginQueryVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'Auth', token: string } | null | undefined };

export const Gener02FragmentFragmentDoc = gql`
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
export const AllGener02Document = gql`
    query AllGener02 {
  allGener02 {
    ...Gener02Fragment
  }
}
    ${Gener02FragmentFragmentDoc}`;

/**
 * __useAllGener02Query__
 *
 * To run a query within a React component, call `useAllGener02Query` and pass it any options that fit your needs.
 * When your component renders, `useAllGener02Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGener02Query({
 *   variables: {
 *   },
 * });
 */
export function useAllGener02Query(baseOptions?: Apollo.QueryHookOptions<AllGener02Query, AllGener02QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllGener02Query, AllGener02QueryVariables>(AllGener02Document, options);
      }
export function useAllGener02LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGener02Query, AllGener02QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllGener02Query, AllGener02QueryVariables>(AllGener02Document, options);
        }
export type AllGener02QueryHookResult = ReturnType<typeof useAllGener02Query>;
export type AllGener02LazyQueryHookResult = ReturnType<typeof useAllGener02LazyQuery>;
export type AllGener02QueryResult = Apollo.QueryResult<AllGener02Query, AllGener02QueryVariables>;
export const Gener02Document = gql`
    query Gener02($id: Int!) {
  gener02(id: $id) {
    ...Gener02Fragment
  }
}
    ${Gener02FragmentFragmentDoc}`;

/**
 * __useGener02Query__
 *
 * To run a query within a React component, call `useGener02Query` and pass it any options that fit your needs.
 * When your component renders, `useGener02Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGener02Query({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGener02Query(baseOptions: Apollo.QueryHookOptions<Gener02Query, Gener02QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Gener02Query, Gener02QueryVariables>(Gener02Document, options);
      }
export function useGener02LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Gener02Query, Gener02QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Gener02Query, Gener02QueryVariables>(Gener02Document, options);
        }
export type Gener02QueryHookResult = ReturnType<typeof useGener02Query>;
export type Gener02LazyQueryHookResult = ReturnType<typeof useGener02LazyQuery>;
export type Gener02QueryResult = Apollo.QueryResult<Gener02Query, Gener02QueryVariables>;
export const LoginDocument = gql`
    query Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;