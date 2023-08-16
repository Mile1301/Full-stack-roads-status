import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const roadsUrl = "http://localhost:3000";

export const fetchRoadStatuses = createAsyncThunk(
  "roads/fetchRoads",
  async ({ pageNum, perPage, searchQuery, filters, sortOrder, priorityQuery, accessToken }) => {
    const query = searchQuery ? `title=${searchQuery}&` : "";
    const priorityFilter = priorityQuery ? `priority=${priorityQuery}&` : "";
    const ordering = filters === "orderBy" ? `orderBy=code&` : "";
    const sorting = sortOrder ? `${sortOrder}&` : "";
    const result = await axios.get(`${roadsUrl}/roads?${query}${priorityFilter}${ordering}${sorting}pageNum=${pageNum}&perPage=${perPage}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return result.data;
  }
);

export const updateRoadStatus = createAsyncThunk("/roads/updateRoads", async ({ roadId, updateData, accessToken }) => {
  try {
    const result = await axios.patch(`${roadsUrl}/roads/${roadId}`, updateData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const addRoadStatus = createAsyncThunk("roads/addRoads", async ({ roadsData, accessToken }) => {
  try {
    console.log("roads data is ", roadsData);
    const result = await axios.post(`${roadsUrl}/roads`, roadsData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
});

export const removeRoadStatus = createAsyncThunk("roads/removeRoads", async ({ roadId, accessToken }) => {
  try {
    const result = await axios.delete(`${roadsUrl}/roads/${roadId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
});

export const registerUser = createAsyncThunk("auth/registerUser", async (userData) => {
  try {
    const result = await axios.post(`${roadsUrl}/auth/register`, userData);
    return result.data;
  } catch (error) {
    throw error;
  }
});

export const loginUser = createAsyncThunk("auth/loginUser", async (credentials) => {
  try {
    const result = await axios.post(`${roadsUrl}/auth/login`, credentials);
    return result.data;
  } catch (error) {
    throw error;
  }
});

const roadsSlice = createSlice({
  name: "roads",
  initialState: {
    value: [],
    status: "idle",
    error: null,
    pageNum: 1,
    perPage: 10,
    filters: "",
    searchQuery: "",
    sortOrder: "",
    statussesCounter: null,
    totalPageNumber: null,
    priorityQuery: "",
    selectedStatus: null,
    addFormStatus: false,
    users: [],
    accessToken: null,
    resultStatus: null,
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setPageNum(state, action) {
      if (action.payload >= 1 && action.payload <= state.totalPageNumber) {
        state.pageNum = action.payload;
      }
    },
    setFilters(state, action) {
      state.filters = action.payload;
      console.log("action", action);
      console.log("state", state.filters);
    },
    setSortOrder(state, action) {
      state.sortOrder = state.sortOrder === "sortOrder=ASC" ? "sortOrder=DESC" : "sortOrder=ASC";
    },
    setPriorityStatus(state, action) {
      state.priorityQuery = action.payload;
    },
    setSelectedStatus(state, action) {
      state.selectedStatus = action.payload;
      console.log("payload from setSelectedStatus", action.payload);
    },
    setAddFormStatus(state, action) {
      state.addFormStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoadStatuses.pending, (state, action) => {
        // console.log("pending", action);
        state.status = "loading";
      })
      .addCase(fetchRoadStatuses.fulfilled, (state, action) => {
        // console.log("ok", action);
        state.status = "success";
        state.value = action.payload[0];
        state.statussesCounter = action.payload[1];
        state.totalPageNumber = Math.ceil(action.payload[1] / state.perPage);
      })
      .addCase(fetchRoadStatuses.rejected, (state, action) => {
        // console.log("nok", action);
        state.status = "fail";
        state.error = action.error.message;
        state.resultStatus = action.error;
        if (action.error.message) state.accessToken = null;
      })
      .addCase(addRoadStatus.pending, (state, action) => {
        // console.log(action);
        console.log(action.payload);
        state.status = "loading";
      })
      .addCase(addRoadStatus.fulfilled, (state, action) => {
        console.log(action);
        console.log(action.payload);
        state.status = "success";
        state.value = [...state.value, action.payload];
      })
      .addCase(addRoadStatus.rejected, (state, action) => {
        console.log(action);
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state, action) => {
        console.log(action);
        console.log(action.payload);
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action);
        console.log(action.payload);
        state.status = "success";
        state.users = [...state.users, action.payload];
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log(action);
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state, action) => {
        // console.log(action);
        // console.log(action.payload);
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // console.log(action);
        state.status = "success";
        state.accessToken = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        // console.log(action);
        state.status = "fail";
        state.error = action.error.message;
      });
  },
});
export const { setSearchQuery, setPageNum, setFilters, setSortOrder, setPriorityStatus, setSelectedStatus, setAddFormStatus } = roadsSlice.actions;
export default roadsSlice.reducer;
