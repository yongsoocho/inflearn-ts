import axios from "axios";

interface IEntry {
  [props: string]: string | boolean;
}

interface IResponse {
  count: number;
  entries: IEntry[];
}

// (async () => {
//   const data: Promise<IResponse> = axios
//     .get("https://api.publicapis.org/entries")
//     .then((res) => res.data)
//     .catch((e) => console.log(e));

//   console.log("fetch result", (await data).entries[0]);
// })();

(async () => {
  const data: Array<Promise<IResponse>> = await Promise.all([
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => res.data.entries)
      .catch((e) => console.log(e)),
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => res.data.entries)
      .catch((e) => console.log(e)),
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => res.data.entries)
      .catch((e) => console.log(e)),
  ]);

  console.log("fetch result1", data[0]);
  console.log("fetch result2", data[1]);
  console.log("fetch result3", data[2]);
})();
