export function getData(url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Error al obtener datos");
      return res.json();
    });
}