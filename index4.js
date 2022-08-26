const todolistID_1 = "were-454k"
const todolistID_2 = "rukd-095r"



const todoLists = [
    {
        id: todolistID_1,
        title: "What to learn",
        filter: "all",
    },
    {
        id: todolistID_2,
        title: "What to buy",
        filter: "all",
    },
]


const tasks = {
    [todolistID_1] : [
        {id: 11, title: "JS", isDone: false},
        {id: 12, title: "HTML", isDone: false},
        {id: 13, title: "CSS", isDone: false},
    ],
    [todolistID_2] : [
        {id: 21, title: "Beer", isDone: false},
        {id: 22, title: "Cola", isDone: false},
        {id: 23, title: "Water", isDone: false},
    ],
}


// console.log(tasks[1].find(t => t.id === 11))
// console.log([...tasks[1],  {id: 14, title: "LESS", isDone: false}])
// console.log(tasks[1].map(t => t.id === 12 ? {...t, isDone: true} : t))
//
console.log([...todoLists, {id: 3, title: "What to read", filter: "all"}])
console.log({...tasks, 3: []})


const secretKey = Math.floor(Math.random()*100)  // 0 - 99

const user = {
    ["name"]: "Bob",
    "user age": 23,
    [secretKey]: "password",
}

console.log(user)


// reduce -> свёртка - ???

const numbers = [10,20,30]

console.log(numbers.reduce((acc, el, i) => acc + el))
// acc - 10, el - 20 => 30
// acc -30, el - 30 => 60
// => 60


Array.prototype.reducePlus = function (func, startValue) {
    let acc = startValue ? startValue : this[0]

    for (let i = startValue ? 0 : 1; i < this.length; i++) {
        acc = func(acc, this[i])
    }
    return acc;
};

console.log(numbers.reducePlus((acc, el) => acc + el))
let students = [
    {
        id: "1",
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {   id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

// const updatedStudent = {
//     1: {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     2: {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     }
// }

const updatedStudents = students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})


// {
//  1:{
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//   2: {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//   3:  {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
// }
console.log(updatedStudents)


