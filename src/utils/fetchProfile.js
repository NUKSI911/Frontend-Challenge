export async function fetchRecords(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse.records.profiles);
}
