# vue-webpack-cli
基于vue2.0+webpack1.0 纯静态页面型前端工程解决方案快读搭建模板。

### 安装软件

- Node.js：v4.0+

### 拷贝项目模板

``` bash
$ git clone git@github.com:xiqe/vue-webpack-cli.git
```


### 安装依赖模块

``` bash
$ npm install
```

### 本地开发环境

- 启动webpack监听

    ``` bash
    webpack -w
    ```

- 启动本地开发环境

    ``` bash
    cd page
    ```
    浏览器打开page下的页面即可访问。

### 业务开发

##### 目录结构

``` js
- vue-webpack-cli/         # 项目名称
  - src/                   # 开发目录
    + resources/           # 资源目录
        + less/                # css资源
        + img/                 # 图片资源
        + js/                  # js&jsx资源
    + components/           # 公共组建目录
    + api/                  # api接口目录
    + view/                 # vue页面template目录
    + vuex/                 # vuex目录
  + dist/                # 编译输出目录
  + page/                  # 本地静态页面入口
  app.js                   # 本地server入口
  webpack.config.js        # webpack配置文件
  package.json             # 项目配置
  README.md                # 项目说明
```

##### 单/多页面支持

约定`/page/**/*.html`为应用的入口文件，在`/src/`一级目录下有一个同名的js文件作为该入口文件的逻辑入口（即entry）。

在编译时会扫描入口html文件并且根据webpack配置项解决entry的路径依赖，同时还会对html文件进行压缩、字符替换等处理。

这样可以做到同时支持SPA和多页面型的项目。


``` js
entry:{
    index: './src/index.js',
    main: './src/main.js'
},

output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: "/",
    filename: 'js/[name].js'
},
```

##### vue专属插件支持

基于axios/vue-router/vuex构建目录结构


### 编译

``` bash
$ webpack build
```

### 部署&发布

纯静态页面型的应用，最简单的做法是直接把`dist`文件夹部署到指定机器即可（先配置好机器ip、密码、上传路径等信息）：

如果需要将生成增量的js、css、图片等发布到cdn，修改下webpack.config.js 项为增量自定义版本号即可：

``` js
const timeStamp = '20180308';
```

### License

MIT.
