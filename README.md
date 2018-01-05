# zrn-utils

## 文件说明

src文件里面的代码问一个复杂函数工具的专题，循序渐进的形式，index.js的为比较好的，适合用的版本

## 项目说明

本项目为我的js util工具库,总结收藏和学习js (参考项目地址)[https://github.com/mqyqingfeng/Blog]

## 发布方法 
```
npm login 
zhangrn 
记得要修改一次版本号 每次发布
```
## 函数API说明

    *

## 使用方法

1. 全局引入使用
    
    ```
    npm i zrn-utils --save
    
    import utils from 'zrn-utils'
    ```
2. 按需引入 (待定)

## todo
* underscore怎么写此类函数库(入侵等,如何组织,分开写,然后webpack打包,引入)
* eslint 的引入。代码风格统一 测试等

## 学习总结

很多代码和项目一开始并不会考虑太多细节以及是否详细,开源项目的力量就是可以让更多的人参与和提出issue和进行贡献
## 修改说明
* jsonp的函数名由之前的Date.now()转为Math.random(),因为前者可能会重复在多个jsonp执行时候会报错
