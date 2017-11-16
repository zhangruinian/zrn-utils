// Arr
const sumArr = function (arr) {
    return arr.reduce(function (pre, cur) {return pre + cur})
}

const covArr = function (arr) {
    return sumArr(arr) / arr.length
}

//cookie
const setCookie = function (name, value, iDay) {
    var oDate = new Date()
    oDate.setDate(oDate.getDate() + iDay)
    document.cookie = name + '=' + value + ';expires=' + oDate
}

const getCookie = function (name) {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=')
        if (arr2[0] == name) {
            return arr2[1]
        }
    }
    return ''
}

//删除cookie
const removeCookie = function (name) {
    setCookie(name, 1, -1)
}

// function
const loadScript = function (url, callback) {
    let script = document.createElement('script')
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                callback()
            }
        }
    } else {
        // ie 9 标准浏览器
        script.onload = function () {
            callback()
        }
    }

}
// 格式化参数 formatParams({key1:11,key2:'dd'}) => "key1=11&key2=dd" 字符串
const formatParams = function (data) {
    let arr = []
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
    }
    return arr.join('&')
    // 另外一种写法
    /*var arr = []
    params = data || {}
    Object.keys(params).forEach(function (key) {
        arr.push(key + '=' + params[key])
    })*/
}
/**
 * 将url查询参数转换为字典对象
 * @param {string} url
 * @returns {{object}}
 */
const parseQueryObject = function (url) {
    var obj = {}
    var key = '',
        value = ''
    // 截取最后一个问号之后的
    var queryArr = url.slice(url.lastIndexOf('?') + 1).split('&')
    queryArr.forEach((query) => {
        key = decodeURIComponent(query.split('=')[0])
        value = decodeURIComponent(query.split('=')[1])
        obj[key] = value
    })
    return obj
}
/**
 * 获取url查询参数(单个)
 * @param {string} url
 * @param {string} name
 * @returns {string}
 */
const getQueryString = function (url, name) {
    var key = '',
        value = ''
    // 截取最后一个问号之后的
    var queryArr = url.slice(url.lastIndexOf('?') + 1).split('&')
    queryArr.forEach((query) => {
        key = decodeURIComponent(query.split('=')[0])
        if (key === name) {
            value = decodeURIComponent(query.split('=')[1])
        }
    })
    return value
}

// jsonp 可增加用promise写的版本 方便then链式调用. 对象传参方便以后扩展 可使用es6语法 结构赋值 简洁

const jsonp = function (options = {}) {
    if (!options.url) {
        throw new Error('jsonp参数违规')
    }
    let callbackName = 'jsonp_' + Date.now()
    let head = document.getElementsByTagName('head')[0]
    let script = document.createElement('script')
    let params = ''

    if (options.data) {
        options.data[options.callback] = callbackName
        params += formatParams(options.data)
    } else {
        params += options.callback + '=' + callbackName
    }
    head.appendChild(script)

    window[callbackName] = function (json) {
        // 进行垃圾回收等
        head.removeChild(script)
        window[callbackName] = null
        options.success && options.success(json)
    }
    // 此时params已经包括回调函数,若不包括下面需要手动写上
    script.src = options.url + (options.url.indexOf('?') === -1 ? '?' : '&') + params
}

const jsonpPromise = (options = {}) => {
    if (!options.url || !options.callback) {
        throw new Error('jsonp参数违规')
    }
    return new Promise((resolve, reject) => {
        let callbackName = 'jsonp_' + Date.now()
        let head = document.getElementsByTagName('head')[0]
        let script = document.createElement('script')
        let params = ''

        if (options.data) {
            options.data[options.callback] = callbackName
            params += formatParams(options.data)
        } else {
            params += options.callback + '=' + callbackName
        }
        head.appendChild(script)
        // 加入resolve的时机比较重要
        window[callbackName] = (res) => {
            // 进行垃圾回收等
            head.removeChild(script)
            window[callbackName] = null
            resolve(res)
        }
        script.onerror = () => {
            reject(new Error(`网络错误`))
        }
        // 此时params已经包括回调函数,若不包括下面需要手动写上
        script.src = options.url + (options.url.indexOf('?') === -1 ? '?' : '&') + params
    })

}

const elementInViewport = function (element) {
    var rect = element.getBoundingClientRect()
    var html = document.documentElement
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    )
}

const debounce = function (func, wait) {
    var timeout
    return function () {
        // 解决this指向问题
        var context = this
        // 解决event对象参数问题
        var args = arguments
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(function () {
            func.apply(context, args)
        }, wait)
    }
}

const utils = {
    sumArr,
    covArr,
    getCookie,
    setCookie,
    removeCookie,
    loadScript,
    parseQueryObject,
    getQueryString,
    formatParams,
    jsonp,
    jsonpPromise,
    elementInViewport,
    debounce
}

module.exports = utils