const http = require("http");
const fs = require("fs");

const app = http.createServer(async (req, res) => {
    const { method, url, param } = req;
    console.log(method, url, param)
    if (url.includes(".ico")) {
        return
    } else if (method == "GET" && url.includes("/menulist")) {
        // res.end("测试")
        fs.readFile("./menu.json", (err, data) => {
            res.end(data)
        })
    }else if (method == "POST" && url.includes("/login")) {
        res.end("测试")
        // if(req)
    }
})

app.listen(3001)

