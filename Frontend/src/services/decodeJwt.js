const decodeJWT = (token) => {
  try {
    const data = JSON.parse(window.atob(token.split(".")[1]));

    return data;
  } catch (err) {
    return null;
  }
};

export default decodeJWT;
