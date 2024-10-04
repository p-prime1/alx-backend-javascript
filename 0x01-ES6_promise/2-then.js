export default function handleResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'success',
    });
    reject(new Error());
  });
}
handleResponseFromAPI()
  .then(() => {
    console.log('Got a response from the API');
  });
