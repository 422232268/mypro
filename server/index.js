/*
 * @Author: za-wangxuezhong
 * @Date: 2019-10-16 15:51:39
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2019-10-16 17:21:41
 * @Description: file content
 */
var Koa = require('koa');
var app = new Koa();
var i = 0;
app.use((ctx,next) => {
    i += 1
    console.log('------------------------');
    console.log(i);
    console.log(app);
    next();
})
class P {
    constructor (name, age, count) {
        this.name = name;
        this.age = age;
        this.count = count
    }
    call() {
        // console.log(this.name);
    }
    counts(count) {
        this.count += count;
        // console.log(this.count)
    }
}

app.use((ctx, next) => {
    let p1 = new P('zs', '18', 1);
    p1.call();
    p1.counts(1);
    p1.counts(1);
    p1.counts(1);
    let p2 = new P('ls', '20', 2);
    p2.call();
    p2.counts(2);
    p2.counts(2);
    p2.counts(2);
    next();
    // ctx.response.body = new Error('cuole');
    ctx.response.body = p1;
})
app.listen(3000, () => {
    console.log('启动成功，监听端口3000')
})
