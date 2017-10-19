// Arr
const sumArr = function (arr) {
    return arr.reduce(function(pre,cur){return pre+cur})
}

const covArr = function (arr) {
    return sumArr(arr) / arr.length;
}

//cookie
const setCookie = function (name,value,iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate;
}

const getCookie =function (name){
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('=');
        if(arr2[0]==name)
        {
            return arr2[1];
        }
    }
    return '';
}

//删除cookie
const removeCookie = function (name){
    setCookie(name,1,-1);
}

// function
const loadScript = function (url, callback) {
    let script = document.createElement('script')
    script.src = url
    document.getElementsByName('head')[0].appendChild(script)

    if(script.readyState){
        script.onreadystatechange = function() {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                callback()
            }
        }
    }else {
        // ie 9 标准浏览器
        script.onload = function () {
            callback()
        }
    }

}
// 格式化参数 formatParams({key1:11,key2:'dd'}) => "key1=11&key2=dd" 字符串
const  formatParams = function(data) {
    let arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
    return arr.join('&');
}

// jsonp 可增加用promise写的版本 方便then链式调用. 对象传参方便以后扩展
const jsonp = function (options = {}) {
    if (!options.url || !options.callback){
        throw new Error('jsonp参数违规')
    }
    let callbackName = 'jsonp_' + Date.now()
    let head = document.getElementsByTagName('head')[0]
    let script = document.createElement('script')
    let params = ''

    if(options.data){
        options.data[options.callback] = callbackName;
        params += formatParams(options.data);
    }else{
        params += options.callback+ "=" +callbackName;
    }
    head.appendChild(script)

    window[callbackName] = function (json) {
        // 进行垃圾回收等
        head.removeChild(script)
        window[callbackName] = null
        options.success && options.success(json);
    }
    // 此时params已经包括回调函数,若不包括下面需要手动写上
    script.src = options.url + (options.url.indexOf('?') === -1 ? '?' : '&') + params
}

const utils = {
    sumArr,
    covArr,
    getCookie,
    setCookie,
    removeCookie,
    loadScript,
    formatParams,
    jsonp
}

module.exports = utils