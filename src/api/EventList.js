export const getEvents = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1.0/list");
    if (!response.ok) {
      throw new Error("Network error");
    }
    const result = await response.json();
    return (result);
  } catch (error) {
    throw error;
  }
}

export const getEventsByTypes = (result) => {
  const data = {
    ongoing: null,
    pending: [],
    complete: [],
    message: null,
  };

  result.data.map((item) => {
    switch (item.status) {
      case "ongoing":
        data.ongoing = item;
        break;
      case "pending":
        data.pending.push(item);
        break;
      case "complete":
        data.complete.push(item);
        break;
    }
  });

  data.message = result.message;

  return data;
}