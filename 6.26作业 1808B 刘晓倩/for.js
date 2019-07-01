// for of 循环
let urlstr="?name=1&age=2"
function UrltoObj(str){
    str=atr.splice(1) //name=1&age=2 拿问号后面的参数
    strary=str.split("&") //['name=1','age=2'] 把&前后分割的拆分成数组
    let obj={}
    for(item of strary){
        item=item.split("=")
        obj[item[0]]=item[0]
    }
    return obj;
}
let res=UrltoObj(urlstr)