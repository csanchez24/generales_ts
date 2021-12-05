import { useParams } from 'react-router-dom';

export const Gener02Edit = () => {
  let params = useParams();
  return <h2>Gener02 #{params.gener02Id}</h2>;
};
