import { REACT_APP_API_URL } from "../../env";

export async function getMenu() {
    return fetch(`${REACT_APP_API_URL}/attractions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  }
