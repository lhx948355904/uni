const http = require("http");
const fs = require("fs");
const uuid = require("node-uuid")

const app = http.createServer(async (req,res) => {
    const { method,url } = req;
    console.log(method,url)
    if(method == "GET" && url.includes("/menulist")){
        res.end("测试")
        fs.readFileSync("./menu.json", data =>{
            console.log(data);
            res.end(data)
        })
    }
})

app.listen(3001)

