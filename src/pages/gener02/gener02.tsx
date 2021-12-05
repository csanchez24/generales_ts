import React from 'react';
import { Link } from 'react-router-dom';
import { useAllGener02Query } from '../../generated/graphql';

const Gener02: React.FC = () => {

  const { data, error, loading } = useAllGener02Query();

console.log(data,error,loading);

  return (
    <div>
      Gener02
      <Link to="/gener02/11">go to 11</Link>
    </div>
  );
};
export default Gener02;
