const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const p = require('path')
const fs = require('fs')
const dbPath = p.join(home, '.todo')

module.exports.add = (title) => {
    //读取之前的任务
    fs.readFile(dbPath, {flag: 'a+'}, (error, content) => {
        if (error){console.log(error)}
        else {
            let list=JSON.parse(data.toString())
            console.log(list)
        }
    })
    //往里面添加一个title任务
    //存储任务到文件
}