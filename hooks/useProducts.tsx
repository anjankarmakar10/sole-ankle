import { STARPI_URL } from "@/lib/constants";
import { useQuery } from "react-query";
import ms from "ms";
const useProducts = (category: string) => {
  const getFetchData = async () => {
    const URL =
      category === "all shoes"
        ? `${STARPI_URL}/api/shoes?populate=*`
        : `${STARPI_URL}/api/shoes?filters[subCategories][name][$contains]=${category}&&populate=*`;

    return fetch(URL).then((res) => res.json());
  };

  return useQuery<Response>({
    queryKey: ["products", category],
    queryFn: getFetchData,
    staleTime: ms("24h"),
  });
};
export default useProducts;
