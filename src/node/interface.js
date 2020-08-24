const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require("koa-bodyparser");
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
    console.log(1)
    ctx.body = ctx.request.body
    // next();
    // const {username,password} = ctx.params;
    // console.log(username,password)
    // ctx.response.body = 'logintest';
})

app.use(bodyParser())
app.use(router.routes())
app.listen(3001)
