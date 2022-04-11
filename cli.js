#!/usr/bin/env node
const program = require('commander');
const api = require('./index.js')

program
    .option('-x, --xxx', 'what the x')
// Returns new command for configuring.
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.slice(0, -1).join(' ')
        api.add(words).then(()=>{console.log('添加成功'),()=>{console.log('添加失败')}})
    });

program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        api.clear().then(()=>{console.log('清除完毕'),()=>{console.log('清除失败')}})
    });

program.parse(process.argv);

console.log(process.argv)

if (process.argv.length===2){
    void api.showAll()
}