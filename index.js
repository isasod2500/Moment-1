import figlet from "figlet"
import fs from "fs";


console.log("Existerar index?", fs.existsSync("./web/html/index.html"));
console.log("Existerar About?", fs.existsSync("./web/html/about.html"));
console.log("Existerar contact?", fs.existsSync("./web/html/contact.html"));

const server = Bun.serve ({
    port: 3000,
    routes: {
        "/": Bun.file("./web/html/index.html"),
        "/about":Bun.file("./web/html/about.html"),
        "/contact":Bun.file("./web/html/contact.html"),
        "/web/css/main.css":Bun.file("./web/css/main.css"),
        "/figlet": () => {
            const body = figlet.textSync("Bun!");
            return new Response(body)
        },
    },
})

console.log(`Listening on ${server.url}`)