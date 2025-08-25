const http = require("http");
//exe1
// const server = http.createServer(async (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");

//   if (req.url === "/") {
//     if (req.method === "GET") {
//       res.write("Welcome to my server!");
//     } else{
//         res.statusCode = 404;
//       } 
//   }
//   else if (req.url === "/about") {
//     if (req.method === "GET") {
//       res.write("This is the about page");
//     } else{
//         res.statusCode = 404;
//       } 
//     }
//   else if (req.url === "/contact") {
//     if (req.method === "GET") {
//       res.write("Or Haibi");
//     } else{
//         res.statusCode = 404;
//       } 
//     }
//   else{
//         res.statusCode = 404;
//       }   
//   res.end();
// });

//exe2

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];


const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if  (req.url === "/api/users") {
    if (req.method === "GET") {
      res.write(JSON.stringify(users));
    } else if (req.method === "POST") {
      const newUser = await readBody(req);
      if (newUser && newUser.content) {
        newUser.id = users[users.length - 1].id + 1;
        users.push(newUser);
        res.write(JSON.stringify(newUser));
      } else {
        res.statusCode = 400;
        res.write(JSON.stringify({ error: "body must include content prop" }));
      }
    } else {
      res.statusCode = 404;
    }
    //find specific user by id
  } else if (req.url.startsWith("/api/users/") && req.method === "GET"){
      const parts = req.url.split("/");
      const id = Number(parts[3]);
      if (Number.isNaN(id)) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: "Invalid id" }));
      }
      const user = users.find(u => u.id === id);
      if (!user) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: "User not found" }));
      }
        res.statusCode = 200;
      return res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write("Page not found");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("server is listening...");
});

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      });
  });
}