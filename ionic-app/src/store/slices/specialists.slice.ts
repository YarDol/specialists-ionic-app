import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSpecialists } from "../../api/specialists/specialists.api";
import { Specialist } from "../../interfaces/specialists/specialist.interface";
import { Filters } from "../../interfaces/specialists/filters.interface";
import { RootState } from "../store";

interface SpecialistsState {
  items: Specialist[];
  page: number;
  total: number;
  loading: boolean;
  error: string | null;
  filters?: Filters;
}

const initialState: SpecialistsState = {
  items: [],
  page: 1,
  total: 0,
  loading: false,
  error: null,
  filters: undefined,
};

export const loadSpecialists = createAsyncThunk(
  "specialists/fetchSpecialists",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { page, filters } = state.specialists;

    return fetchSpecialists(page, filters || {});
  }
);

const slice = createSlice({
  name: "specialists",
  initialState,
  reducers: {
    resetList(state) {
      state.items = [];
      state.page = 1;
      state.total = 0;
      state.error = null;
    },
    setFilters(state, action: PayloadAction<Filters>) {
      state.filters = action.payload;
      state.items = [];
      state.page = 1;
      state.error = null;
    },
    nextPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSpecialists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadSpecialists.fulfilled, (state, action) => {
        state.items.push(...action.payload.items);
        state.total = action.payload.total;
        state.loading = false;
        state.error = null;
      })
      .addCase(loadSpecialists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load specialists";
      });
  },
});

export const { resetList, setFilters, nextPage } = slice.actions;

export const specialistsReducer = slice.reducer;
