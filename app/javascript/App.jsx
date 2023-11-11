import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from './redux/api';

function App() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return <h1>{greeting}</h1>;
}

export default App;
