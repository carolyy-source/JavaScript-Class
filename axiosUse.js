//比fetch更好的工具

const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

axios.get(url).then((resp) => {
  const data = resp.data;
  console.log(data);
});

try {
  const { data: stations } = await axios.get(url);
  console.log(stations);
} catch (err) {
  console.log(err);
}
