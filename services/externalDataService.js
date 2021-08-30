const axios = require("axios");
const logger = require("../middleware/logger");

const EXTERNAL_URL = "https://jsonplaceholder.typicode.com";

const getUsersFromExternalSource = () => {
  return axios
    .get(`${EXTERNAL_URL}/users`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

const getUserFromExternalSource = (id) => {
  return axios
    .get(`${EXTERNAL_URL}/users/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

const getUserPostsFromExternalSource = (id) => {
  return axios
    .get(`${EXTERNAL_URL}/posts?userId=${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = {
  getUsersFromExternalSource,
  getUserFromExternalSource,
  getUserPostsFromExternalSource,
};
