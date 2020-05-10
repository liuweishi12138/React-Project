## React项目每日进度

## 项目第一天
**创建react脚手架**    
#### 全局下载工具  
`npm install -g create-react-app `
### 下载模板项目   
` reate-react-app react-admin`   
### 引入antd组件库
`yarn add antd` 
### 实现按需引入打包
1.下载依赖模块   
`yarn add react-app-rewired customize-cra`   
修改package.json文件
```
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```
2.定义加载配置的js模块: config-overrides.js 
```
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```
3. 使用 babel-plugin-import   
`yarn add babel-plugin-import`   
修改config-overrides.js文件
```
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );
```
### 自定义主题
1.安装less解析   
`yarn add less less-loader`   
2.修改config-overrides.js 文件   
```
- const { override, fixBabelImports } = require('customize-cra');
+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
-   style: 'css',
+   style: true,
  }),
+ addLessLoader({
+   lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
+     javascriptEnabled: true,
+     modifyVars: { '@primary-color': '#1DA57A' },
+   },
+ }),
);
```

## day02任务
		1.引入react-router-dom，搭建一级路由(login路由、admin路由)
		2.Login组件---静态
		3.Login组件---引入antd的Form组件
		4.Login组件--用户名的声明式校验
		5.Login组件--密码的自定义校验
				注意：校验器的返回值是Promise，第一个参数我们不用。
		6.Login组件--收集表单数据
				注意：表单验证成功后，才会触发onFinish
		7.配置代理解决跨域
		8.axios请求拦截器统一处理参数json编码问题。
		9.axios响应拦截器统一处理：1.数据为data。2.错误。
		10.抽离:api/index.js统一管理项目的ajax请求。
		## day03任务
		redux

## day04任务
		redux

## day05任务
		1.登录结果的提示+进度条
		2.若登录成功，跳转到：/admin
		3.搭建项目的redux环境（参考redux教学中最后一个版本）
		4.登录成功后，保存用户信息到redux
		5.Admin组件读取用户名展示
		6.处理刷新页面redux信息丢失的问题
		7.给Login组件和Admin组件增加权限的校验
		8.Header组件-静态
		9.Header组件-全屏，使用screenfull
		10.Header组件-退出登录

## day06任务
		1.Header组件展示用户名
		2.装饰器语法（讲解代码在App.js中）
				第一步：yarn add @babel/plugin-proposal-decorators 用于解析装饰器语法。
				第二步：在config-overrides.js，追加一个loader,addDecoratorsLegacy。
				第三步：在jsconfig.json中，追加一个配置："experimentalDecorators":true。
		3.将项目中的connect用装饰器语法去写。
		4.高阶函数 & 高阶组件
		5.自定义一个高阶组件，校验组件权限（难点，非必须掌握）
		6.LeftNav静态
		7.LeftNav--Menu组件
		8.LeftNav---Menu组件的分析
		9.自动生成菜单
		10.搭建Admin的二级路由