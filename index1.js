const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
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
    }
];

const filterFunction = (array, callback) => {
    const result = new Array()
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}
console.log(filterFunction(students, el=>!el.isMarried))

