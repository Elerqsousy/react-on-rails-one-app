import React from 'react';

function App() {
  const [data, setData] = React.useState('');
  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/root/greetings')
    const ApiData = await response.json(); 
    setData(ApiData.greeting);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return <h1>{data}</h1>;
}

export default App;
