import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk('GREETING/FETCHRANDOM', async () => {
  const response = await fetch('http://localhost:3000/root/greetings');
  const ApiData = await response.json();
  console.log(ApiData.greeting);
  return ApiData.greeting;
});

export default fetchData;
