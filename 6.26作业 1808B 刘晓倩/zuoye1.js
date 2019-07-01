// 作业： 1、?name=1&age=2&c=3  =>{name:1,age:2,c:3}
//        2、 [{"id":1,"name":"苹果"},{"id":2,"name":"橘子"}]  把id为1 的这一项 name 修改成 "香蕉"

   let str="wwww.abc.com?name=1&age=2&c=3";
    console.log(str.split("?")[1]) //name=1&age=2&cc=3
    var a = str.split("?")[1];
   var b = a.split("&")
   console.log(b);// ["name=1", "age=2", "c=3"]
   var obj = { };
   for(var k in b){
    obj[b[k].split("=")[0]]=b[k].split("=")[1]
   }
   console.log(obj)//{ name: '1', age: '2', c: '3' }