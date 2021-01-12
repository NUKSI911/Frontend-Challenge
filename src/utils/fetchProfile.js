export async function fetchRecords(url) {
  try{

    return fetch(url)
    .then((response) =>    response.json())
    .then((jsonResponse) => jsonResponse.records.profiles);
  }
 catch(err){
   console.log(err)
 }
}
