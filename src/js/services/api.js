import { API_TOKEN, BASE_URL } from '/config.js';

const fetchVideo = async (videoId) => {
  const url = `${BASE_URL}${videoId}`;
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
  };
  try {
      const response = await fetch(url, { headers });
      const responseData = await response.json();
      return responseData;
  } catch (error) {
      throw new Error(error.message);
  }
};

export { fetchVideo };