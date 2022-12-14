import { API_LOGIN } from "./settings";

export default function getAllFavs({ jwt }) {
  return fetch(`${API_LOGIN}all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is not Ok");
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
