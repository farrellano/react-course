const APIKEY = "qJJxX35CLtMm7nvnprAv23uwNJcRSx30";
const APIURL_DETAIL = "https://api.giphy.com/v1/gifs/";

export const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}`;

export default function getApiDetail(id) {
  return `${APIURL_DETAIL}${id}?api_key=${APIKEY}`;
}
