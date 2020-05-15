// Feature 1: Written inside typescript
// Feature 2: Import from URL
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

// Feature 3: Needs permission --allow-net
const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

// Feature 4: Top level await
for await (const req of server) {
    // Feature 5: Browser fetch API
    const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
    req.respond({ body: JSON.stringify(todo, undefined, 4) });
}