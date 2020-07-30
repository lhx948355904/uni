const http = require("http");
const fs = require("fs")

const app = http.createServer((req,res) => {
    const { method,url } = req;
    console.log(method,url)
    if(method == "POST" && url == "/login"){
        console.log(res)
    }
    res.end(`test`)
})

app.listen(3000)