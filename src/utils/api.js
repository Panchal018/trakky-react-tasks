import axios from "axios";

const BASE_URL = "http://20.193.149.47:2242";

export const fetchServices = async (url = "/salons/service/") => {
  try {
    const response = await axios.get(
      url.startsWith("http") ? url : `${BASE_URL}${url}`
    );
    return response.data;
  } catch (error) {
    console.error("API fetch failed:", error);
    return { results: [], next: null, previous: null };
  }
};
