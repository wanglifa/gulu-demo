# LiFa - 一个Vue UI 组件

[![Build Status](https://travis-ci.org/wanglifa/LiFa-UI.svg?branch=master)](https://travis-ci.org/wanglifa/LiFa-UI)

作者：王立发

## 介绍

## 开始使用

1. 安装

   使用本框架前，请在css中开启border-box

   ```
   *,*::before,*::after{box-sizing: border-box}
   ```
   IE8及以上浏览器都支持此样式

   你还需要设置默认颜色等变量(后续会改为scss变量)
   ```
   html {
       --button-height: 32px;
       --font-size: 14px;
       --button-bg: white;
       --button-active-bg: #eee;
       --border-radius: 4px;
       --color: #333;
       --border-color: #999;
       --border-color-hover: #666;
   }
   ```
   IE15及以上浏览器都支持此样式

2. 安装 LiFa UI
   ```
   npm i --save lifa-ui
   ```
3. 引入 LiFa UI
   ```
   import {Button, ButtonGroup, Icon, Svg} from 'lifa-ui'
   

   export default {
     name: 'app',
     components: {
       HelloWorld,
       'lf-button': Button,
       'lf-icon': Icon
     }
   }
   ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


