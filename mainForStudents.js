const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//Проверка:
console.log(user===copyUser)
console.log(user.friends===copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: {...user.friends}}

//Проверка:
console.log(user===deepCopyUser)
console.log(user.friends===deepCopyUser.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students]

//Проверка:
console.log(copyStudents === students)
console.log(copyStudents[0] === students[0])
console.log(copyStudents[2].name === students[2].name)
console.log(copyStudents !== students)

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => ({...el}))

//Проверка:
console.log(deepCopyStudents !== students)
console.log(deepCopyStudents[0] !== students[0])
console.log(deepCopyStudents[0].name === students[0].name)
console.log(deepCopyStudents.length === students.length)

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((a, b) => a.name.localeCompare(b.name))
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => (b.scores - a.scores))
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(el => el.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(el => !el.isMarried)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(el => el.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ')
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(', ')
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(el => ({...el, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find(el => el.name === 'Ann')
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испoльзуя методы массивов и Math.max()*
let bestStudent = newDeepCopyStudents.reduce((acc, el) => acc.scores > el.scores ? acc : el)
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum = newDeepCopyStudents.reduce((acc, el) => acc + el.scores, 0)
console.log(scoresSum)









