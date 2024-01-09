export const ApiPost = async () => {
   const request =  await fetch('https://jsonplaceholder.typicode.com/posts');
   const response = await request.json();
   console.log(response)
   return response.slice(0, 10)

}