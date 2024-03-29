import { STARPI_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

const useFilterShoes = (filter: string) => {
  const [shoes, setShoes] = useState<Shoe[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String>();

  const getData = async (controller: AbortController) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${STARPI_URL}/api/shoes?filters[${filter}][$eq]=true&&populate[image][populate]=true`,
        { signal: controller.signal }
      );
      const data: Response = await res.json();
      setShoes(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        if (error.message === "AbortError") return;
      } else {
        setError("Someting went wrong");
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getData(controller);

    return () => controller.abort();
  }, []);

  return { shoes, loading, error };
};
export default useFilterShoes;
