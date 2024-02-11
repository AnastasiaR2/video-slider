import { API_TOKEN, BASE_URL } from '../config.js';

const fetchVideo = async (videoId) => {
  const url = `${BASE_URL}${videoId}?autoplay=1&muted=1`;
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
  };
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch video: ${response.status} ${response.statusText}`,
    );
  }
  const responseData = await response.json();
  return responseData;
};

export { fetchVideo };
