// Top Level await
const getPromise = () => new Promise((resolve, reject) => resolve("123"));


const result = await getPromise();
console.log(result);
