import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchSpecialists,
  fetchSpecialistsCount,
} from "../../api/specialists/specialists.api";
import { Specialist } from "../../interfaces/specialists/specialist.interface";
import { Filters } from "../../interfaces/specialists/filters.interface";
import { RootState } from "../store";

interface SpecialistsState {
  items: Specialist[];
  page: number;
  total: number;
  loading: boolean;
  error: string | null;
  filters: Filters;
  filteredCount: number;
  countLoading: boolean;
}

export const DEFAULT_FILTERS: Filters = {
  priceMin: 300,
  priceMax: 5000,
  ageMin: 18,
  ageMax: 65,
  gender: "female",
};

const initialState: SpecialistsState = {
  items: [],
  page: 1,
  total: 0,
  loading: false,
  error: null,
  filters: DEFAULT_FILTERS,
  filteredCount: 0,
  countLoading: false,
};

interface LoadSpecialistsParams {
  filters?: Filters;
  append?: boolean;
}

export const loadSpecialists = createAsyncThunk(
  "specialists/fetchSpecialists",
  async (params: LoadSpecialistsParams | undefined, { getState }) => {
    const state = getState() as RootState;
    const { page, filters } = state.specialists;

    const items = await fetchSpecialists(page, params?.filters ?? filters);
    return { ...items, append: params?.append ?? false };
  }
);

export const loadFilteredCount = createAsyncThunk(
  "specialists/fetchFilteredCount",
  async (filters: Filters) => {
    return fetchSpecialistsCount(filters);
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
    resetFilters(state) {
      state.filters = DEFAULT_FILTERS;
      state.items = [];
      state.page = 1;
      state.error = null;
    },
    nextPage(state) {
      state.page += 1;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSpecialists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadSpecialists.fulfilled, (state, action) => {
        if (action.payload.append) {
          state.items.push(...action.payload.items);
        } else {
          state.items = action.payload.items;
        }
        state.total = action.payload.total;
        state.loading = false;
        state.error = null;
      })
      .addCase(loadSpecialists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load specialists";
      })
      .addCase(loadFilteredCount.pending, (state) => {
        state.countLoading = true;
      })
      .addCase(loadFilteredCount.fulfilled, (state, action) => {
        state.filteredCount = action.payload.count;
        state.countLoading = false;
      })
      .addCase(loadFilteredCount.rejected, (state) => {
        state.countLoading = false;
      });
  },
});

export const { resetList, setFilters, resetFilters, nextPage, clearError } =
  slice.actions;

export const specialistsReducer = slice.reducer;
