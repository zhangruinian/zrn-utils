/* AJAX
* @param String opt.type [http请求方式, POST或GET]
* @param String opt.url [发送请求的url]
* @param Boolean opt.async [是否为异步请求, true为异步, false为同步]
* @param Object opt.data [AJAX发送的数据]
* @param Function opt.success [AJAX发送并接收成功后的回调函数]
*/
function ajax(opt) {
    opt = opt || {};
    opt.method = !!opt.method === false ? 'POST' : opt.method.toUpperCase();
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function () {};
    //创建xhrRequest对象 兼容用IE5或者IE6的睿智 (逃
    var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.xhr');
    var params = [];
    //对特殊字符串进行encodeURIComponent编码
    for (var k in opt.data){
        params.push(encodeURIComponent(k) + '=' + encodeURIComponent(opt.data[k]));
    }
    var postData = params.join('&');
    //判断POST方式或GET方式提交
    if (opt.method.toUpperCase() === 'POST') {
        xhr.open(opt.method, opt.url, opt.async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xhr.send(postData);
    }else if (opt.method.toUpperCase() === 'GET') {
        xhr.open(opt.method, opt.url + '?' + postData, opt.async);
        xhr.send(null);
    }
    //判断状态码是否是200
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            opt.success(xhr.responseText);
        }
    }
}

//默认post方式提交 可指定method:'get' 则以get方式提交
ajax({
    url : 'test.php',
    data : {some : 123, data:666},
    success:function(res){
        //服务器若返回JSON数据格式 将字符串转化为对象即可
        console.log(JSON.parse(res));
    }
})