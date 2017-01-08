'Default parameters';

// function say(phrase, times) {
//     phrase = phrase || 'Hello';
//     times = times || 5;
//
//     for (var i = 0; i < times; i++) {
//         console.log(phrase);
//     }
// }
// say();


// function say(phrase = 'Hello', times = 5) {
//     for (let i = 0; i < times; i++) {
//         console.log(phrase);
//     }
// }
//
// say();

// function initializeCanvas(options) {
//     options = options || {};
//     var height = options.height || 600;
//     var width  = options.width  || 400;
//     var lineStroke = options.lineStroke || 'black';
//
//     console.log(width, height, lineStroke);
// }
// initializeCanvas();


// function initializeCanvas({ height=610, width=420, lineStroke='red'}) {
//
//     console.log(width, height, lineStroke);
// }
// initializeCanvas({});
// initializeCanvas();



// function initializeCanvas({ height=610, width=420, lineStroke='red'} = {}) {
//
//     console.log(width, height, lineStroke);
// }
// initializeCanvas();

'Rest parameter';
//остаточный параметер

// function logArguments(name, age, ...args) {
//     console.log('Name:', name, 'Age:', age);
//     for (let arg of args) {
//         console.log('other param:', arg);
//     }
// }
//
// logArguments('Bob', 45, '178cm', '82kg');

'Spread operator';
//Оператор расширения

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(...[1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log(document.getElementsByTagName('li'));
// console.log(...document.getElementsByTagName('li'));

// console.log('max', Math.max(1, 2, 3, 4, 10, 6, 7));

// var nums = [1, 2, 3, 4, 10, 6, 7];
// console.log('max on array', Math.max.apply(null, nums));
// console.log('max on array2', Math.max(...nums));


// let cities = ['San Francisco', 'Los Angeles'];
// let places = ['Miami', ...cities, 'Chicago'];
// console.log(places);

// let places2 = ['Miami', 'Chicago'];
// console.log('places es5', places2.slice(0, 1).concat(cities, places2.slice(1)));


'Template literals';
//Шаблонные литералы

// var first = 'John', last = 'Doe', id = 17;

// var name = 'Your name is ' + first + ' ' + last + '.';
// var url = 'http://localhost:3000/api/messages/' + id;
// console.log(name, url);

// var name = `Your name is ${first} ${last}.`;
// var url = `http://localhost:3000/api/messages/${id}`;
// console.log(name, url);

'Multi-line strings'

// var roadPoem = 'Then took the other, as just as fair,\n\t'
//     + 'And having perhaps the better claim\n\t'
//     + 'Because it was grassy and wanted wear,\n\t'
//     + 'Though as for that the passing there\n\t'
//     + 'Had worn them really about the same,\n\t'
//
// var fourAgreements = 'You have the right to be you.\n\
//     You can only be you when you do your best.'
//
// console.log(roadPoem, fourAgreements);

// var roadPoem = `Then took the other, as just as fair,
//     And having perhaps the better claim
//     Because it was grassy and wanted wear,
//     Though as for that the passing there
//     Had worn them really about the same,`;
//
// var fourAgreements = `You have the right to be you.
//     You can only be you when you do your best.`;
// console.log(roadPoem, fourAgreements);

'var, let, const';

////var
// var snack = 'Meow Mix';
//
// function getFood(food) {
//     if (food) {
//         var snack = 'Friskies';
//         return snack;
//     }
//     return snack;
// }
//
// console.log(getFood(false)); // undefined


////let
// let snack = 'Meow Mix';
//
// function getFood(food) {
//     if (food) {
//         let snack = 'Friskies';
//         return snack;
//     }
//     return snack;
// }
//
// console.log(getFood(false)); // 'Meow Mix'

////const
// const c = 299792458;
// c++; //Uncaught TypeError: Assignment to constant variable.

// for (const i = 0; i < 10; i++) {
//     console.log('Const i = ', i);
// }

'Destructuring assignment';

// var person = {
//     name: 'John Doe',
//     age: 25,
//     hometown: 'Cherkasy',
//     status: 'Single'
// };
//
// var {name, hometown} = person;
//
// console.log(name, hometown);


// var [li1, li2, li3, , li5] = document.getElementsByTagName('li');
// console.log(li1, li5);

// var [first, second, third, fourth, fifth, sixth, seventh] = [1,2,3,4,5,6,7,8];
// console.log(first, third, fifth, seventh);

'Arrow functions';

// function Person(name = 'John Doe', age = 25) {
//     this.name = name;
//     this.age = age;
//     this.friends = [];
//
//     this.sayHello = function () {
//         console.log('this', this);
//         console.log('hello, my name is ' + this.name + '. I\'m ' + this.age);
//     };
//
//     // this.showFriends = function () {
//     //     // var personCtx = this;
//     //     console.log('showFriends this', this);
//     //     this.friends.forEach(function (friend) {
//     //         console.log('showFriends foreach this', this);
//     //         // console.log(friend + ' is ' + this.name + '\'s friend');
//     //         // console.log(friend + ' is ' + personCtx.name + '\'s friend');
//     //     })
//     // };
//
//     // this.showFriendsES6 = () => {
//     //     console.log('showFriendsES6 this', this);
//     //     this.friends.forEach((friend) => {
//     //         console.log('showFriendsES6 foreach this', this);
//     //         console.log(friend + ' is ' + this.name + '\'s friend');
//     //     });
//     // };
// }
//
// var person= new Person('Anon', 22);
// person.friends = ['Jane', 'Gary', 'Tim', 'Joe', 'Jim'];
// person.sayHello();
// person.showFriends();
// person.showFriendsES6();

'Enhanced Object Literals';

// var serviceBase = {port: 3000, url: 'azat.co'},
//     getAccounts = function(){return [1,2,3]};

// var accountServiceES5 = {
//     port: serviceBase.port,
//     url: serviceBase.url,
//     getAccounts: getAccounts,
//     toString: function() {
//         return JSON.stringify(this.valueOf())
//     },
//     getUrl: function() {return "http://" + this.url + ':' + this.port},
//     valueOf_1_2_3: getAccounts()
// };
//
// console.log(accountServiceES5, accountServiceES5.port);

// var accountService = {
//     __proto__: serviceBase,
//     getAccounts,
//     toString() {
//         return JSON.stringify((super.valueOf()))
//     },
//     getUrl() {return "http://" + this.url + ':' + this.port},
//     [ 'valueOf_' + getAccounts().join('_') ]: getAccounts()
// };
//
// console.log(accountService, accountService.port);

'String methods';

// var str1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
// var str2 = 'dustry. Lorem Ipsum has be';
//
// console.log(str1.includes(str2));
// console.log(str1.indexOf(str2) > -1);

// console.log('='.repeat(50));
// console.log(' '.repeat(20) + 'REPEAT MAGIC');
// console.log('='.repeat(5).repeat(5).repeat(2));

'Classes';

// //es5 - properties in constructor-function, methods in prototype
// function Person(name, age, gender) {
//     this.name   = name;
//     this.age    = age;
//     this.gender = gender;
// }
//
// Person.prototype.incrementAge = function () {
//     return this.age += 1;
// };

// //to extend classes we need
// function Personal(name, age, gender, occupation, hobby) {
//     Person.call(this, name, age, gender);
//     this.occupation = occupation;
//     this.hobby = hobby;
// }
//
// Personal.prototype = Object.create(Person.prototype);
// Personal.prototype.constructor = Personal;
// Personal.prototype.incrementAge = function () {
//     Person.prototype.incrementAge.call(this);
//     this.age += 20;
//     console.log(this.age);
// };

//in ES6 we can do that
// class Person {
//     constructor(name, age, gender) {
//         this.name   = name;
//         this.age    = age;
//         this.gender = gender;
//     }
//
//     incrementAge() {
//         this.age += 1;
//     }
// }

// and now we have `extend` keyword
// super([arguments]); // calls the parent constructor.
// super.functionOnParent([arguments]);

// class Personal extends Person {
//     constructor(name, age, gender, occupation, hobby) {
//         super(name, age, gender);
//         this.occupation = occupation;
//         this.hobby = hobby;
//     }
//
//     incrementAge() {
//         super.incrementAge();
//         this.age += 20;
//         console.log(this.age);
//     }
// }

'https://tproger.ru/translations/es6-cheatsheet-2/';

'Modules';
'Modules';
'Modules';
'Modules';

'Generators';
'Async Await';
