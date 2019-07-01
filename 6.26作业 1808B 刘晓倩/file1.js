let path=require("path")
let fs=require("fs")
let fsPromise=fs.promises;
let filename=path.join(__dirname,'good.json');
fsPromise.readFile(filename,"utf-8").then(data=>{
    // 读取出来的是个json  转成能操作的对象
    data=JSON.parse(data)
    console.log(data)
    data.push({
        id:2,
        name:"橘子"
    })
    // 写入数据的时候要把对象转成json
    fsPromise.writeFile(filename,JSON.stringify(data),"utf-8")
})

let filName=path.join(__dirname,'good.json');
fsPromise.readFile(filName,"utf-8").then(data=>{
    // 读取出来的是个json  转成能操作的对象
    data=JSON.parse(data)
    // console.log(data)
    // for(var key in data){
    //    if(data[key].id==1){
    //        data[key].name="香蕉"
    //    }
    // }

    let newarray=data.map(item=>{
        if(item.id===1){
            item.name="香蕉"
        }
        return item
    })

    // 写入数据的时候要把对象转成json
    // fsPromise.writeFile(filName,JSON.stringify(data),"utf-8")
    fsPromise.writeFile(filName,JSON.stringify(newarray),"utf-8")
})