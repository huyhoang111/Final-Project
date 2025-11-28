// Function Name : hook useApp

export const getParamsHelp = (params) => {
  const urlParams = [];
  for (const key of Object.keys(params)) {
    const value = params[key];

    if (Array.isArray(value)) {
      value.forEach((item) => {
        urlParams.push(`${key}[]=${encodeURIComponent(item)}`);
      });
    } else {
      urlParams.push(`${key}=${encodeURIComponent(value)}`);
    }
  }
  return urlParams.join("&");
};
