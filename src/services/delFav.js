import { API_LOGIN } from "./settings";

export default function deleteFavService({ id, jwt }) {
  return fetch(`${API_LOGIN}fav/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
