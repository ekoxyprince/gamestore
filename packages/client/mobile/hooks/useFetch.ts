import { useQuery } from "@tanstack/react-query";
import { get } from "@/utils/api";
import useAuthStore from "@/stores/useAuthStore";

interface FetchProps {
  key: string;
  url: string;
}

export default function useFetch(data: FetchProps) {
  const auth = useAuthStore();
  return useQuery({
    queryKey: [data.key],
    queryFn: () => {
      console.log("making request");
      return get(data.url, auth.auth.token).then((resp) => {
        console.log("Response", resp);
        if (resp.data) return resp.data;
        return resp;
      });
    },
  });
}
