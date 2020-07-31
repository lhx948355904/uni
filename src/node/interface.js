const http = require("http");
const fs = require("fs");
const uuid = require("node-uuid")

function getUser(key,value){
    fs.readFile("./user.json",(err,data) => {
        console.log(data)
        
        if(data && JSON.parse(data)['userList'].length > 1){
            const userList = JSON.parse(data)['userList']
            userList.forEach(v => {
                if(v.username == key){
                    return JSON.parse(data)[key]
                }
            });
            
        }else{
            fs.readFile("./user.json",(err,data) => {
                const json = data ? JSON.parse(data) : {};
                json[key] = value;
                let obj = {
                    "username":[json]
                }

                fs.writeFile("./user.json",JSON.stringify(obj),(err) => {
                    if(err) console.log(err);
                    console.log("写入成功")
                })
            })
        }
        
    })
}


const app = http.createServer(async (req,res) => {
    const { method,url } = req;
    console.log(method,url)
    if(method == "GET" && url.startsWith("/login")){
        const params = url.split("?")[1].split("&");
        let obj = new Map();
        params.map(v => {
            obj.set(v.split("=")[0],v.split("=")[1])
        })
        obj.set("id",uuid.v1())
        getUser(obj)
    }
})

app.listen(3000)

