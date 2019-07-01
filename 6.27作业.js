// //6.27作业：
// let tempArr = [1,2,[3,4,[5,6,[7,8]]]] ;
// function unid(arr){ 
//     let result_str2 = arr.join(',').split(',');
//     let result_number = result_str2.map(item=>{
//         return Number(item);
//     });
//     return result_number;
// }
// console.log(unid(tempArr));

// // toString() 方法可把一个逻辑值转换为字符串，并返回结果。

// var a = tempArr.toString().split(",").map(item=>{
//     return Number(item);
// });
// console.log(a)


// var b = (tempArr+'').split(',').map(item=>{
//     return Number(item);
// });
// console.log(b)


// let arr=[1,2,[3,4,-['a','b']]]
// function flattern (arr){
//     let newarr=arr.reduce((prev,next)=>{
//        return prev.concat(Array.isArray(next)?flattern(next):next)
//     },[])
//     return newarr
// }
// let res = flattern(arr)

// // 二维转一维
// let arr1=[1,[2]]
// console.log([].concat(...arr1)) // [].concat(1)  [].concat(2)
// console.log([].concat.apply([],arr1)) 

// let arr1=["name","age"]
// let arr2=["bgs","10"]
// // =>{name:"bgs",age:"10"}
// let res=arr1.reduce((prev,next,index)=>{
// //    Object.name=bgs
//     prev[next]=arr2[index]
//     return prev
// },{})
// console.log(res);

// let arr=[1,[2]]
// function flattern(arr){
//     while(Array.some(item=>Array.isArray(item))){
//         arr=[].concat(...arr)
//     }
//     return arr
// }
// let res=flattern(arr);
// console.log(res);


// let arr=[1,2,[3,4,['a','b']]]
// let narr=[]
// function flattern(arr){
//     arr.forEach(item => {
//         if (Array.isArray(item)){
//             narr.concat(...item)
//         }else{
//             narr.push(item)
//         }
//     });
//     return narr
// }
// let res=flattern(arr);
// console.log(res);


let arr=[1,2,[3,4,-['a','b']]]
let narr=[]
function flattern(arr){
    arr.forEach(item => {
      newarr=narr.concat(item)
    });
    return newarr
}
let res=flattern(arr);
console.log(res);


