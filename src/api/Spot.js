import { headers, host } from "../constants/Constants";
import { getToken } from "../helper/Storage";

export const getSpot = async (eventID) => {
  try {
    const token = await getToken();
    headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${host}/api/v1.0/event/${eventID}/spots`, {
      headers: headers
    });

    if (response.status === 401) {
      throw new Error("Unauthenticated");
    }

    if (response.status === 422) {
      console.log(response);
    }

    if (!response.ok) {
      throw new Error("Network error");
    }

    const result = await response.json();
    return (result);
  } catch (error) {
    throw error;
  }
}