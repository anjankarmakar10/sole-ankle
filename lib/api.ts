import { STARPI_URL } from "./constants";

export const getShoes = async () =>
  fetch(`${STARPI_URL}/api/shoes?populate=*`).then((res) => res.json());
