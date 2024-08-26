import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { REGISTER_USER_API_URL } from '../../util/apiUrl';

import { postRequest } from '../../util/requestMethods';

const postItemFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (postData) => {
    console.log(postData);
    const options = {
      body: JSON.stringify(postData), //표준 json 문자열로 변환
    };
    return await postRequest(apiURL, options);
  });
};
//실제 데이터를 db에 넣을 수 있는 함수
export const fetchPostItemData = postItemFetchThunk(
  'fetchPostItem',
  REGISTER_USER_API_URL
);
//create slice에서 사용하는 상태 체크
const handleFullfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};
const handleRejected = (state, action) => {
  console.log(action.payload);
  state.isError = true;
};

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    postItemData: null,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder

      .addCase(fetchPostItemData.fulfilled, handleFullfilled('postItemData'))
      .addCase(fetchPostItemData.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
