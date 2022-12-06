import { REACT_APP_API_URL } from "../../env";

export async function loginUser(credentials) {
  return fetch(`${REACT_APP_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
