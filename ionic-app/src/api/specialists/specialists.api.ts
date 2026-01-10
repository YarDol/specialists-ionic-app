import { api } from "../../shared/api";
import { SpecialistsResponse } from "../../interfaces/specialists/specialist.interface";
import { Filters } from "../../interfaces/specialists/filters.interface";

export const fetchSpecialists = async (
  page: number,
  filters: Filters
): Promise<SpecialistsResponse> => {
  const { data } = await api.get("/specialists", {
    params: {
      page,
      limit: 10,
      ...filters,
    },
  });

  return data;
};

export const fetchSpecialistsCount = async (
  filters: Filters
): Promise<{ count: number }> => {
  const { data } = await api.get("/specialists/count", {
    params: filters,
  });

  return data;
};
