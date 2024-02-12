export const host = "http://127.0.0.1:8000";
// export const host = "http://192.168.100.34:8000";

export let headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

export const Colors = {
  primary: "#F2E6D8", // main
  secondary: "#006d8b", // main
  success: "#009DAD",
  warning: "#1B65A6",
  danger: "#d72d51",
  black: "#1E1D40",
  white: "#FFFFFF",
  light: "#95918d",
};

// MaterialCommunityIcons
export const TabIcons = {
  "Spots" : "arrow-split-vertical",
  "Booths" : "curtains-closed",
  "Home" : "home-analytics",
  "Seminars" : "presentation",
  "Surveys" : "chart-box",
  "Visitor" : "account-group",
};

export const ListSegment = [
  {
    key: 1,
    name: "Upcoming",
  },
  {
    key: 2,
    name: "Completed",
  },
];

export const HomeSegment = [
  {
    key: 1,
    name: "Dashboard",
  }, {
    key: 2,
    name: "Booth"
  }
];