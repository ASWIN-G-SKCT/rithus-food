import axios from "axios";
import useSWR from "swr";

const fetcher = async (url: string) => await (await axios({ url })).data;

export default function useFetchWithSWR<T>(url: string) {
  const { data, error, isLoading } = useSWR<T>(url, fetcher);

  return { data, error, isLoading };
}

// TODO: Type this properly
