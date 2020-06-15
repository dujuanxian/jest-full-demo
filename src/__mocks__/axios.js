const axios = jest.genMockFromModule("axios");

let response = {};
function __setResponse(data) {
  response = data;
}

axios.__setResponse = __setResponse;

export default {
  ...axios,
  get: jest.fn(() => Promise.resolve({ data: response })),
  post: jest.fn(() => Promise.resolve({ data: response })),
};
