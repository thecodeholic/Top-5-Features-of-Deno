// Browser API functions
const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                        .then(response => response.json());
console.log(todo);

setTimeout(() => console.log("From set timeout"), 2000);

setInterval(() => console.log("From setInterval"), 1000);