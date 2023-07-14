import axios from "axios";

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: "https://vuedatakb.azurewebsites.net",
});

client.interceptors.request.use(
  async (config) => {
    config.headers["x-api-key"] ="ck-5bb7d5fc6bb16834fc658e16048fbe2c5ebdafdc551795d64329b9abe01bd762";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * Request Wrapper with default success/error actions
 */
const request = function (options) {
  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    let err = error.response;
    let errorObj = {
      url: err.config.baseURL + err.config.url,
      payload: err.config.data,
      method: err.config.method,
      status: err.status,
      headers: err.headers,
      errorMessage: err.data.message,
    };
    console.error("Request Failed:", errorObj);
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
