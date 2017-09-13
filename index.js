// Arr
let sumArr = function (arr) {
    return arr.reduce(function(pre,cur){return pre+cur})
}

let covArr = function (arr) {
    return sumArr(arr) / arr.length;
}

//cookie

let setCookie = function (name,value,iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate;
}

let getCookie =function (name){
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
let removeCookie = function (name){
    setCookie(name,1,-1);
}

// function
const utils = {
    sumArr,
    covArr,
    getCookie,
    setCookie,
    removeCookie
}

module.exports = utils