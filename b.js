function transform(str) {
    var arr = []
    var idValue = str.match(/#\d*/)[0]
    arr.push({
        type: 'id',
        value: idValue
    })

    var classValue = str.match(/\.\d*/)[0]
    arr.push({
        type: 'class',
        value: classValue
    })

    var sonValue = str.match(/>\d*/)[0]
    arr.push({
        type: 'son',
        value: sonValue
    })
    /*while(str){
        xx = match(id)
        str.slice()
            ...
        #a .b > c  => [{
            type: id, value: 'a'
                ...
        }]
    }*/
       // while slice for 多写少看 编译原理 二叉树 深了去, 正则并不致命,
        // 逻辑判断,深了去写,少瑕疵,变量名字写清楚, 无论function还是class classes不要各种错误,编辑器提示错误
    // 平常业务处理很多这种问题
    // 真的搞明白,知道怎么写....
    // 不仅要关注实现原理,不能只是会用,也要多写  敲一遍写出来会了才是自己的


    // 模板引擎实现原理,思路 看了.. 时间的有效利用和快速学习 看直播(视频敲代码也是学习...)
}