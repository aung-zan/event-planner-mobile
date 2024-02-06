import { headers, host } from "../constants/Constants";

export const authLogin = async (email, password, device_name) => {
  try {
    const response = await fetch(`${host}/api/v1.0/login`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({ email, password, device_name }),
    });

    if (response.status === 422) {
      const error = await response.json();
      throw new Error(error.message);
    }

    if (!response.ok) {
      throw new Error("Something went wrong.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
