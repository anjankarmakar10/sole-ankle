import { STARPI_URL } from "@/lib/constants";
import { useQuery } from "react-query";
import ms from "ms";

const useFeaturedProducts = () => {
  const getFetchData = async () => {
    const URL = `${STARPI_URL}/api/shoes?filters[featured][$eq]=true&&populate[image][populate]=true`;
    return fetch(URL).then((res) => res.json());
  };

  return useQuery<Response>({
    queryKey: ["featured"],
    queryFn: getFetchData,
    staleTime: ms("24h"),
  });
};
export default useFeaturedProducts;
