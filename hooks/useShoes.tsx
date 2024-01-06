import { STARPI_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

const useShoes = (category: string) => {
  const [shoes, setShoes] = useState<Shoe[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String>();

  const getData = async (category: string, controller: AbortController) => {
    const URL =
      category === "all shoes"
        ? `${STARPI_URL}/api/shoes?populate=*`
        : `${STARPI_URL}/api/shoes?filters[subCategories][name][$contains]=${category}&&populate=*`;

    try {
      setLoading(true);
      const res = await fetch(URL, { signal: controller.signal });
      const data: Response = await res.json();
      setLoading(false);
      setShoes(data.data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "AbortError") return;
      } else {
        setError("Someting went wrong");
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getData(category, controller);

    return () => controller.abort();
  }, [category]);

  return { shoes, loading, error };
};
export default useShoes;
