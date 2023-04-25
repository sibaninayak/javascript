const element = document.getElementById("heading");

console.log(element)

console.log(_.toUpper('bts')); //all capital
console.log(_.lowerCase('Bts')); //all small
console.log(_.lowerFirst('BTS')) //first small
console.log(_.capitalize('lucky')) ;//first letter capital
console.log(_.camelCase('sibaninayak')); //no space
console.log(_.deburr('déjà vu'));
console.log(_.kebabCase('kitty sibani')); //-
console.log(_.snakeCase('kitty sibani')); //_
console.log(_.endsWith('kitty', 'y')) //end letter then true
console.log(_.endsWith('kitty', 't')) //if not then false
console.log(_.endsWith('kitty', 't' ,4)) // position is crct then t
console.log(_.startsWith('sibani' , 's')) //start with
console.log(_.startsWith('sibani' , 'b'))
console.log(_.startsWith('sibani' , 'b' ,3))
// console.log(_.escape('fred, barney, $ pebbles'))
console.log(_.pad('kitty',78, '_-')); //it will print in middle
console.log(_.padEnd('kitty',78, '_-')); 
console.log(_.padEnd('kitty',78)); // start
console.log(_.padStart('kitty',78, '_-')); 
console.log(_.padStart('kitty',78));//end
console.log(parseInt(089)) //it will ignore 0
console.log(_.map(['6', '08', '10'], _.parseInt))
console.log(_.repeat('lucky', 9)) //it will repeat 
console.log(_.replace("anneyong v", 'v', "tae")) //it will replace the name v to tae & we have to give the patter name same as first
console.log(_.split("kitty&lucky&sibi" , "&" ,2)); //it will remove the char
console.log(_.startCase('--tae--'))
console.log(_.trim('kitty', 4))

