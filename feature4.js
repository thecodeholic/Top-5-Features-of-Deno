// Permission is necessary
const file = await Deno.open('./sample.txt');
await Deno.copy(file, Deno.stdout);