import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk('GREETING/FETCHRANDOM', async () => {
  const response = await fetch('/root/greetings');
  const ApiData = await response.json();
  console.log(ApiData.greeting);
  return ApiData.greeting;
});

export default fetchData;
