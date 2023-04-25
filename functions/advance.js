// callback function
// function n1(name){
//     let d=5;
//     function n2(name){
//         return name *2;
//     }
//     console.log(n2(name)+d)
// }
// n1(10)

// function outer(){
//     // console.log("kitty")
//     let name = "sibani";
//     return name

//     // return ""
//     // return true
// }
// outer()
// console.log(typeof outer())
// console.log(outer())

// function outer(name){
//    if(typeof name === 'string'){
//     return "it is a string";
//    }
//    else if(typeof name=== 'number'){
//     return "it is a number";
//    }
//    else if(typeof name === 'boolean'){
//     return "it is boolean";
//    }
//    else{
//     return "provide a valid data type"
//    }
// }
// outer()
// // console.log(outer(function(){}))
// // console.log(outer("kitty"))
// // console.log(outer(67))
// console.log(outer(true))

// multistatement
// function multiSti(name,age){
//     // return {name ,age}
//      return [name ,age]
// }
// console.log(multiSti("kitty",20))

// function fn1(age){
//     return age*2
// }
// function fn2(age2){
//     return age2
// }
// console.log(fn2(fn1(6)))

// setTimeout(()=>{
//     console.log("hello kitty")
// },2000)
// we can write this in function as
// function call(){
//     console.log("hellooooooooooooooooooo")
// }
// setTimeout(call,5000)

// let element = document.getElementById('kiii')
// element.addEventListener('click',()=>{
//     alert("you clicked")
// })


let array = ["kitty",20,"lucky",25,true]
console.log(array[3])
console.log(array[2])
console.log(array[1])
console.log(array[0])
console.log(typeof array[4])
console.log(array[7])

const [b1,b2,b3,b4,b5] = array //?array destructuring
const [a,...b]=array  //?spread operator
console.log(b1,b2,b3,b4,b5)
console.log({a,b})



