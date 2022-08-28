export const getToken = () => {
  const item = localStorage.getItem("user");
  if (item) {
    const user = JSON.parse(item);
    return user;
  } else {
    return null;
  }
};

export const setToken = (token) => {
  return localStorage.setItem("user", JSON.stringify(token));
};

export const removeToken = () => {
  return localStorage.removeItem("user");
};
