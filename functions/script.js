// ?four types of function
// function
// function expression
// immidiatley invoked function expression(iife)
// arrow function
// annonymous function

//? decdeclaration of a function
// function name(){
//     console.log("this is a function")
// }
// function name(){
//     console.log("this is a function1")
// }
//? calling a function
// name()
// name()

// we can use let and const also
// var fun1 = function(){
//     console.log('calling fn/')
// }
// const fun = function(){
//     return('kitty')
// }
// console.log(typeof fun())

// // (function(){
// //     return 'hello'
// // })();
// console.log(typeof (function(){
//     return ''
// })());

// //? arrow function
// const kitty = () => {
//     console.log("arrow function");
// };
// kitty()

// ?function with arguments - (object)
// there are two properties in arguments - 1.length , 2.callee
// function arg(){
    // console.log(arguments)
    // console.log(arguments.length)
    // console.log(arguments.callee)
    // console.log(typeof arguments.length)
    // console.log(typeof arguments.callee)
    // console.log(typeof arguments)
//     console.log(array.isArray(arguments))

// arguments[5]= "lucky";
// console.log(arguments[0])
// console.log(arguments[1])
// console.log(arguments[2])
// console.log(arguments[3])
// console.log(arguments[4])
// console.log(arguments[5])
// console.log(arguments.length)

// //    for(i=0;i<arguments.length;i++){
// //     console.log(arguments[i])
// //    }
//  }
// arg("kitty",2,true,'');

// ? function with parameter
// function bangtan(member1,member2,member3,member4,member5,member6,member7){
//     // console.log(member1)
//     // console.log(member2)
//     // console.log(member3)
//     // console.log(member4)
//     // console.log(member5)
//     // console.log(member6)
//     // console.log(member7)

//     console.log({member1,member2,member3,member4,member5,member6,member7})

// }

// bangtan('kim namjoon','kim seokjin','min yoongi','jung hoseok','park jimin','kim taehyung','jeon jungkook')

// function bangtan1(member1,member2,member3,member4,member5,member6,member7='jk'){
//    console.log({member1,member2,member3,member4,member5,member6,member7})

// }
// bangtan1('RM','jin')

// let kitty = "helloo kittyy"
// console.log(kitty);
// function user(){
//     console.log(kitty)
//     console.log(this)
// }
// user()

// function Params(){
//     //  console.log({p1,p2,p3,p4,p5,p6,p7})  //total argument
//     //  console.log(arguments.length)

//     //  for(i=0;i<arguments.length;i++){
//     //     console.log(arguments[i])
//     //  }
//     let arr = [];

//      //?new loop for object and array {for....of}
//      for(values of arguments){
//         // console.log(values)
//         arr.push(values)  //if we make a array nd pushh then it will print all the arguments without param also
//      }
//      console.log(arr)
// }
// Params("Rm","jin","yoongi","hobi","jimin","v",'Jk')

function RestParams(p1,...rest){
    // function RestParams(p1,...BTS){
    //     //?in place of rest we can write any namee but we have to give ...dots
    console.log({p1,rest});  //total argument
    // console.log(arguments.length)

    // console.log(typeof rest)
    // console.log(Array.isArray(rest))
    // console.log(Array.isArray(arguments))
    // console.log(rest.length) //all of the array method is work on rest
    // console.log(arguments.length)

   //  for(i=0;i<arguments.length;i++){
   //     console.log(arguments[i])
   //  }

    //?new loop for object and array {for....of}
    for(values of rest){
       console.log(values)
    }
}
RestParams("Rm","jin","yoongi","hobi","jimin","v",'Jk')