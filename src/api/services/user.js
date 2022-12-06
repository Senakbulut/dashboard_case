import { REACT_APP_API_URL } from "../../env";

export async function getUser(id) {
    return fetch(`${REACT_APP_API_URL}/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  }
