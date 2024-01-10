import { STARPI_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

const getFetchData = async (category: string, controller: AbortController) => {
  const URL =
    category === "all shoes"
      ? `${STARPI_URL}/api/shoes?populate=*`
      : `${STARPI_URL}/api/shoes?filters[subCategories][name][$contains]=${category}&&populate=*`;

  try {
    const res = await fetch(URL, { signal: controller.signal });
    const data: Response = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "AbortError") return;
    } else {
      return "Someting went wrong";
    }
  }
};

// This function store cache values from previous request using emoization (memoization is an optimization technique)
const optimizeDataFetching = (getData: Function) => {
  const cache: any = {};
  return async (category: string, controller: AbortController) => {
    if (category in cache) {
      console.log("From Cache");
      return cache[category];
    } else {
      const value = await getData(category, controller);

      cache[category] = value;
      console.log("From API");
      return value;
    }
  };
};

const getOptimizeData = optimizeDataFetching(getFetchData);

const useShoes = (category: string) => {
  const [shoes, setShoes] = useState<Shoe[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String>();

  const getData = async (category: string, controller: AbortController) => {
    try {
      setLoading(true);
      const data = await getOptimizeData(category, controller);
      setShoes(data.data);
      setLoading(false);
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
