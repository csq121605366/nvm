// 引入shell命令js
require('shelljs/global');

// 引入webpack
const webpack = require('webpack');
// 引入文件系统
const fs = require('fs');
// 引入工具函数
const _ = require('lodash');
// path.resolve返回一个地址的绝对路径
const { resolve } = require('path');
// process cwd() 方法返回 Node.js 进程当前工作的目录
const r = url => resolve(process.cwd(), url);
// 引入webpackconf配置
const webpackConf = require('./webpack.conf');
// 引入生产配置文件
const config = require(r('./mina-config'));
// 生产目录
const assetsPath = r('./mina')

// 删除原始输出目录
rm('rf', assetsPath);
// 创建输出目录
mkdir(assetsPath);
// 配置输入配置
let renderConf = webpackConf;
renderConf.entry = () => _.reduce(config.json.pages, (en, i) => {
    en[i] = resolve(process.cwd(), './', '${i}.mina');
    return entry;
})

renderConf.entry = entry();
renderConf.entry.app = config.app;

renderConf.output = {
    path: r('./mina'),
    filename: '[name].js'
}

var compiler = webpack(renderConf);

fs.writeFileSync(r('./mina/app.json'), JSON.stringify(config.json), 'utf8');

compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, (err, stats) => {
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: true,
        chunks: true,
        chunkModules: true
    }) + '\n\n');
})