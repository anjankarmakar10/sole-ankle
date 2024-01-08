import { STARPI_URL } from "@/lib/constants";
import { useQuery } from "react-query";
import ms from "ms";
import { FiltersState } from "@/redux/state/filters/filtersSlice";
const useProducts = (filter: FiltersState) => {
  const getFetchData = async () => {
    const URL = `${STARPI_URL}/api/shoes?filters[subCategories][name][$contains]=${filter.category}&&sort=${filter.price}&&populate=*`;

    return fetch(URL).then((res) => res.json());
  };

  return useQuery<Response>({
    queryKey: ["products", filter],
    queryFn: getFetchData,
    staleTime: ms("24h"),
  });
};
export default useProducts;
