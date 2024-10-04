export default function handleResponseFromAPI() {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        status: 200,
        body: 'success',
      });
    } catch (error) {
      reject(new Error());
    } finally {
      console.log('Got a response from API');
    }
  });
}
