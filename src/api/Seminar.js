import { headers, host } from "../constants/Constants";
import { getToken } from "../helper/Storage";

export const getSeminar = async (eventID) => {
  try {
    const token = await getToken();
    headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${host}/api/v1.0/event/${eventID}/seminars`, {
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
};

export const seminarAdmission = async (eventID, seminarID, vcode) => {
  try {
    const data = { vcode: vcode };
    const token = await getToken();
    headers["Authorization"] = `Bearer ${token}`;

    const response = await fetch(
      `${host}/api/v1.0/event/${eventID}/seminar/${seminarID}/admission`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify(data),
      }
    );

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
    return result;
  } catch (error) {
    throw error;
  }
};
