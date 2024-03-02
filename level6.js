// // Literals
// const myComputer = {
//     model: 'hp',
//     processor: 'i5',
// }
// console.log(myComputer)
// console.log(myComputer.model)

// const house = {
//     floors: 15,
//     entrances: 1,
//     "apartments on the floor": 5,
// }
// console.log(house)
// console.log(house['apartments on the floor'])

// // Literals expand
// const newHouse = {
//         floors: 15,
//         entrances: 1,
//         [prompt('ключ')]: prompt('значення'),
//         // [prompt('ключ')]: prompt('значення'),
//     }
//     console.log(newHouse)

// // Literals copy
// let newHouseObject = newHouse;
// newHouseObject.name = prompt('Your name');
// console.log(newHouse)
// console.log(newHouseObject.name)

// // Html tree
// var body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName: 'span',
//                     children: ['Enter a data please:'],
//                 },
//                 {
//                     tagName: '/br',
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'name',
//                     },
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'surname',
//                     },
//                 },
//             ]
//         },
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'ok',
//                     },
//                     children: ['OK'],
//                 },
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'cancel',
//                     },
//                   children: [Cancel] ,
//                 },
//             ]
//         }
//     ]
// }
// // body.tagName['button'].children[5] = 'Cancel'
// // body.tagName['input'].attrs['id'][2] = 'surname'
// console.log(body.tagName['input'].attrs['id'])

// // Parent
// body.children[0].parent = parent;
// body.children[1].parent = parent;
// body.children[2].parent = parent;
// body.children[3].parent = parent;
// body.children[4].parent = parent;
// body.children[5].parent = parent;

// Change OK
// body.tagName['button'].attrs['id'].children['ok'] = prompt('text')

// Destructure
// const {tagName="span", children="Enter a data please:"} = children;
// const { tagName="button", attrs="id", children="Cancel"} = children;
//  const { tagName="input", attrs="id", children="surname"} = children;


////////////// // Destruct array
// let arr = [1,2,3,4,5, "a", "b", "c"]
// let [[even1, even2], [odd1, odd2, odd3], []] = arr;
//  console.log(arr)
// for (let key of arr) {
//     result [0] %= 0;
// }

// ////////////////// Destruct string
// let arr = [1, "abc"]
// let [number] = arr[0]
// let [s1,s2,s3] = arr[1]
// console.log(arr[1])

// // Destruct 2
// let obj = {
//     name: 'Ivan',
//     surname: 'Petrov',
//     children: [{ name: 'Maria' }, { name: 'Nikolay' }]
// }
// const [name1, name2] = children;

// // Destruct 3
// let arr = [1,2,3,4,5,6,7,10]
// let [a,b,length = [arr].length] = arr;
// console.log(arr[length])

// // Copy delete
// const myComputer = {
//     model: 'hp',
//     processor: 'i5',
// }
// console.log(myComputer)
// console.log(myComputer.model)

// const {processor, ...myComputerNow} = myComputer;
// console.log(myComputerNow)

/////// // Currency real rate
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
// .then(data => {
//        //ця функція запускається коли дані завантажуються.
//        //Інший код працює РАНIШЕ.
//        //тільки тут є змінна data з завантаженими даними
//        console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
//     })

//     const realRate = {}
//     realRate.inputCurrency = prompt('input currency');
//     realRate.conversionCurrency = prompt('conversion currency');
//     realRate.sumInputCurrency = prompt('sum input currency');

// 