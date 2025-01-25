export const getUrlWithQueryParams = (url: string, params?: Record<string, string | number | undefined>) => {
  const urlParams = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined) {
        return;
      }

      urlParams.append(key, String(value));
    });
  }

  return urlParams.toString() ? `${url}?${urlParams.toString()}` : url;
};
