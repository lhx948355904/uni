const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const app = new koa();

app.use(async (ctx,next) => {
    next();
})

let file = "";
fs.readFile(__dirname+"/menu.json", (err, data) => {
    file = data.toString();
})


router
.get("/menulist",async (ctx,next) => {
    console.log(file)
    ctx.body = file;
})

router.post("/login",(ctx,next) => {
    ctx.body = "test"
    next();
    // const {username,password} = ctx.params;
    // console.log(username,password)
    // ctx.response.body = 'logintest';
})

app.use(bodyParser())
app.use(router.routes())
app.listen(3001)
