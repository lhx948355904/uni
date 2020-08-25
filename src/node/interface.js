const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require("koa-bodyparser");

const {v1} = require("uuid")

const jwt = require("jsonwebtoken");
const secret = "lhx";

const fs = require("fs");
const app = new koa();

let file = "";
fs.readFile(__dirname+"/menu.json", (err, data) => {
    file = data.toString();
})

router
.get("/menulist",(ctx,next) => {
    ctx.body = file;
})
router.post("/login",async (ctx,next) => {
    if(ctx.request.body.username == "admin" && ctx.request.body.password == "123456"){
        const user = {
            username:"admin",
            password:"123456"
        }
        const token = jwt.sign({
            data:user,
            exp:Math.floor(Date.now())/1000 + 3600
        },secret)

        ctx.body = {
            username:"admin",
            msg:true,
            id:v1(),
            token:token,
        }
    }else{
        ctx.body = {
            msg:false
        }
    }
    // next();
    // const {username,password} = ctx.params;
    // console.log(username,password)
    // ctx.response.body = 'logintest';
})

app.use(bodyParser())
app.use(router.routes())
app.listen(3001)
