import { HotDeal, Product } from "interfaces/types";
import useFetchWithSWR from "./useFetchWithSWR";

export default function useFetchHotDeals() {
  const {
    data: hotDeals,
    isLoading,
    error,
  } = useFetchWithSWR<HotDeal[]>("/api/hot-deals");

  return { hotDeals, isLoading, error };
}
