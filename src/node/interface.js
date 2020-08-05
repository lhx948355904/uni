const http = require("http");
const fs = require("fs");

const app = http.createServer(async (req, res) => {
    const { method, url } = req;
    console.log(method, url)
    if (url.includes(".ico")) {
        return
    } else if (method == "GET" && url.includes("/menulist")) {
        // res.end("测试")
        fs.readFile("./menu.json", (err, data) => {
            console.log('data', data.toString());
            res.end(data)
        })
    }
})

app.listen(3001)

