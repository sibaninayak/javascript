const heading = document.getElementById("heading");

// let arr = [];
// console.log(arr)

// let arr1 = new Array()
// console.log(arr1)

// let arr2 = Array()
// console.log(arr1)


// let str = 'kitty'
// let num = 5
// let bool = false

// console.log(Array.isArray(arr))
// console.log(Array.isArray(arr1))
// console.log(Array.isArray(arr2))
// console.log(Array.isArray(str))
// console.log(Array.isArray(num))
// console.log(Array.isArray(bool))

// console.log(typeof arr)
// console.log(typeof arr1)
// console.log(typeof arr2)


// let arr = [];
// let num = 1;
// let obj = {};
// let fn = function () {};
// let str = 'string 1'
// let bool = true

// console.log(arr.length); //0
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);
// console.log(obj instanceof Object);
// console.log(fn instanceof Function); //true
// console.log(fn instanceof Object); //true
// console.log(num instanceof Number);
// console.log(str instanceof String)//false
// console.log(str instanceof Object)//false
// console.log(bool instanceof Object)//false
// console.log(bool instanceof Boolean)//false

// console.log(null instanceof Object)
// console.log(undefined instanceof Object)
// console.log(typeof null)
// console.log(typeof undefined)

// ?methods and properties
// let obj = {
//     name:'kitty',//property
//     function(){}//method
// }

// let obj1 = new Object()

// console.log(typeof obj)
// console.log(typeof obj1)

// let arr = [];
// let arr1 = {};
// console.log(Array.isArray(arr))
// // console.log(_.isArray(arr))
// console.log(Array.isArray(arr1))

// console.log(arr.length)
// console.log(arr)
// console.log(arr.push('ashok'))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.push('sahu'))
// console.log(arr)
// console.log(arr.length)

// console.log(arr.length)
// console.log(arr)
// console.log(arr.unshift('ashok'))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.unshift('sahu'))
// console.log(arr)
// console.log(arr.length)

// let arr2 = [1,2,3,4,5];
// console.log(arr2.length)
// console.log(arr2)
// console.log(arr2.shift())
// console.log(arr2)
// console.log(arr2.length)
// console.log(arr2.shift())
// console.log(arr2)
// console.log(arr2.length)

// console.log(arr2.length)
// console.log(arr2)
// console.log(arr2.pop())
// console.log(arr2)
// console.log(arr2.length)
// console.log(arr2.pop())
// console.log(arr2)
// console.log(arr2.length)


// let arr3 = ['mankada','kukura','ghusuri','damo','gai','panda'];
// console.log(arr3[0])
// console.log(arr3[1])
// console.log(arr3[2])
// console.log(arr3[3])
// console.log(arr3[4])
// console.log(arr3[5])

// console.log(arr3[-1])
// console.log(arr3[-2])
// console.log(arr3[-3])
// console.log(arr3[-4])
// console.log(arr3[-5])
// console.log(arr3[-6])

// console.log(arr3.includes())//false
// console.log(arr3.includes('kukura'))//true
// console.log(arr3.includes('jhipiti'))//false
// console.log(arr3.includes('mankada'))//true

// console.log(arr3.at(1))
// console.log(arr3.at(7))//undefined


// let arr = [1,2,3,4,5,6,7,8]
// console.log(arr.includes(2))
// console.log(arr.includes(1))
// console.log(arr.includes(00000002))
// console.log(arr.includes('x'))
// console.log(arr.includes(+'0'))
// console.log(arr.includes(+'1'))

// console.log(arr)
// console.log(arr.fill(8))

const arr = [9,6,8,3,0,1,5]
console.log(arr)

// console.log(arr.sort())
// console.log(arr.sort(function(a,b){
//     return a-b
// }))
// console.log(arr.sort(function(a,b){
//     return b-a
// }))

let arr2 = [
    {
        id:1,
        name:"kitty",
        age:18
    },
    {
        id:2,
        name:"sibani",
        age:20
    },
    {
       id:3,
       name:"lucky",
       age:25
    }
]
// console.log({arr2});
// console.log(arr2.map((value,index,arr)=>value))
// console.log(arr2.map((value,index,arr)=>index))
// console.log(arr2.map((value,index,arr)=>arr))

console.log(arr2.map(function(value,index,arr) {
    return value.name
}))

function callback(value,index,arr){
    return value.age
}
console.log(arr2.map(callback));

let items = [
    {
        img: "no img",
        Totalrating: 4.3,
        rating :11,
        review:6,
        price :2999,
        specification:{
                Brand:"BoAt",
                Model_Name:"Rockerz 551ANC",
                Colour:"Sage Green",
                Headphones_form :"On Ear",
                Connector_Type :"Bluetooth",
                Special_Feature:"Active Noise Cancellation, Ambient Sound Mode, Up to 100H Playtime, ASAP™ Charge",
                Mounting_Hardware:"User Manual, Warranty Card, Charging Cable, Rockerz 551ANC",
                Age_Range :"adult",
                Noise_Control:	"Active Noise Cancellation",
                Ear_Placement:	"On Ear"
        },
   },
   {
    img: "no img",
    Totalrating: 2.7,
    rating :11,
    review:6,
    price :1500,
    specification:{
            Brand:"BoAt",
            Model_Name:"Rockerz 551ANC",
            Colour:"red",
            Headphones_form :"On Ear",
            Connector_Type :"Bluetooth",
            Special_Feature:"Active Noise Cancellation, Ambient Sound Mode, Up to 100H Playtime, ASAP™ Charge",
            Mounting_Hardware:"User Manual, Warranty Card, Charging Cable, Rockerz 551ANC",
            Age_Range :"adult",
            Noise_Control:	"Active Noise Cancellation",
            Ear_Placement:	"On Ear"
    },
},
{
    img: "no img",
    Totalrating: 3.9,
    rating :11,
    review:6,
    price :3999,
    specification:{
            Brand:"BoAt",
            Model_Name:"Rockerz 551ANC",
            Colour:"purple",
            Headphones_form :"On Ear",
            Connector_Type :"Bluetooth",
            Special_Feature:"Active Noise Cancellation, Ambient Sound Mode, Up to 100H Playtime, ASAP™ Charge",
            Mounting_Hardware:"User Manual, Warranty Card, Charging Cable, Rockerz 551ANC",
            Age_Range :"adult",
            Noise_Control:	"Active Noise Cancellation",
            Ear_Placement:	"On Ear"
    },
},
];
console.log({items})
console.log(items.filter((elm)=>{
    return elm.Totalrating < 4
}))
console.log(items.filter((elm)=>{
    return elm.price < 3000
}))
// console.log(_.map(items,(elm)=>{
//     return elm.price < 3000
// })
// console.log(
//     items.filter((elm) => {
//       return elm.price > 2000;
//     })
//   );
  
//   console.log(
//     _.filter(items, (elm) => {
//       return elm.price > 2000;
//     })
//   );
  
//   console.log(
//     _.filter(items, (elm) => {
//       return elm.Totalrating < 3;
//     })
//   );



