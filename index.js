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
    const script = document.createElement('script')
    script.onload = function () {
        callback()
    }
    script.src = url
    document.getElementsByName('head')[0].appendChild(script)
}

const utils = {
    sumArr,
    covArr,
    getCookie,
    setCookie,
    removeCookie,
    loadScript
}

module.exports = utils