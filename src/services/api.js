const dolar = async () => {
  const url = "https://www.dolarsi.com/api/api.php?type=dolar";

  let usd = await fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => (data, { data }));

  return usd.data;
};

const euro = async () => {
  const url = "https://www.dolarsi.com/api/api.php?type=euro";

  let euro = await fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => (data, { data }));

  return euro.data;
};

const libra = async () => {
  const url = "https://www.dolarsi.com/api/api.php?type=libra";

  let libra = await fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => (data, { data }));

  return libra.data;
};

const real = async () => {
  const url = "https://www.dolarsi.com/api/api.php?type=real";

  let real = await fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => (data, { data }));

  return real.data;
};

export default { dolar, euro, libra, real };
