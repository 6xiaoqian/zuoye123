// url 查询字符串转对象
let urlstr="?name=1&age=2";
function UrltoObj(str){
     str=atr.splice(1) //name=1&age=2 拿问号后面的参数
     strary=str.split("&") //['name=1','age=2'] 把&前后分割的拆分成数组
     let obj={}
     strary.forEach(item => {
         item = item.splice("=")//[name:1][age:2] 数组的第0项是key 第1项是value
         obj[item[0]]=item[1]
     });
}
let res=UrltoObj(urlstr)
console.log(res)