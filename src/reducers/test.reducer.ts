import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";
import { serializeAxiosError } from "./reducer.utils";
import { error } from "console";

export const initialState = {
  entities: [] as any[],
  entity: {} as any,
  loading: false,
  updating: false,
  totalItems: 0,
  testMessage: null as string | null,
  errorMessage: null as string | null,
  error: false,
};

export type TestState = Readonly<typeof initialState>;

export const getData = createAsyncThunk("TEST/GET_DATA", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return response.data;
});

export const TestSlice = createSlice({
  name: "TEST",
  initialState: initialState as TestState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action.payload", action.payload);
        state.testMessage = action.payload.title;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { reset } = TestSlice.actions;

export default TestSlice.reducer;
