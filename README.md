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