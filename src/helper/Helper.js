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
};

export const getHomeData = (result) => {
  const data = {
    exhibition: result?.data?.exhibition,
    chartData: result?.data?.chartData,
    totalVisitorCount: result?.data?.totalVisitorCount,
  };

  return data;
}