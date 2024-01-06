import { STARPI_URL } from "./constants";

interface ShoeResponse {
  data: Shoe;
}

export const getShoes = async (): Promise<Response> =>
  fetch(`${STARPI_URL}/api/shoes?populate=*`).then((res) => res.json());

export const getShoe = async (id: string): Promise<ShoeResponse> =>
  fetch(`${STARPI_URL}/api/shoes/${id}?populate=*`).then((res) => res.json());
