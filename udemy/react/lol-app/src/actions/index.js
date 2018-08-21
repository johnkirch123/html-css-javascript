import axios from "axios";

const API_KEY = "RGAPI-56c82691-a4b9-4285-888f-22980469ac44";
const ROOT_URL = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=${API_KEY}`;

export const FETCH_CHAMPIONS = "FETCH_CHAMPIONS";

export function fetchChampions() {
  const request = axios.get(ROOT_URL);
  console.log(request);
  return {
    type: FETCH_CHAMPIONS,
    payload: request
  };
}
