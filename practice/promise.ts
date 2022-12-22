// axios @types/axios
import axios from "axios";

interface entries {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Link: string;
  Category: string;
}

interface IResponse {
  count: number;
  entries: Array<entries>;
}

(async () => {
  const data: Promise<IResponse> = axios
    .get("https://api.publicapis.org/entries")
    .then((res) => res.data)
    .catch((e) => e.message);

  console.log("fetch", (await data).entries[0]);
})();

(async () => {
  const data: Array<Promise<IResponse>> = await Promise.all([
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => res.data.entries[0])
      .catch((e) => e.message),
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => res.data.entries[0])
      .catch((e) => e.message),
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => res.data.entries[0])
      .catch((e) => e.message),
  ]);

  console.log("firtst", data[0]);
  console.log("second", data[1]);
  console.log("third", data[2]);
})();
