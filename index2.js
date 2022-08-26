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


const getNames = (array)=>{
const result = [];
const getValueForResult = el => el.name
for (let i = 0; i < array.length;i++){
    const newValue = getValueForResult(array[i])
    result[i] = newValue
}
    return result
}
console.log(getNames(students))


const getNames1 = (array)=>{
    const result = [];
    const getValueForResult = el => el.scores
    for (let i = 0; i < array.length;i++){
        const newValue = getValueForResult(array[i])
        result[i] = newValue
    }
    return result
}
console.log(getNames1(students))


const addScrores = (array)=>{
    const result = [];
    const getValueForResult = el => ({...el, scores: el.scores + 10})
    for (let i = 0; i < array.length;i++){
        const newValue = getValueForResult(array[i])
        result[i] = newValue
    }
    return result
}
console.log(addScrores(students))


const mapFunction = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length;i++){
        const newValue = callback(array[i])
        result[i] = newValue
    }
    return result

};

console.log(mapFunction(students, el => el.name))
console.log(mapFunction(students, el => el.scores))
console.log(mapFunction(students, el => ({...el, scores: el.scores + 10})))


const filterFunction = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length;i++){
        if (callback(array[i]) === true){
            result.push(array[i])
        }
    }
    return result
};

console.log(filterFunction(students, el => el.isMarried))
console.log(filterFunction(students, el => el.scores > 90))

const findFunction = (array, callback) => {
    for (let i = 0; i < array.length;i++){
        if (callback(array[i]) === true){
            return array[i]
        }
    }
};


console.log(findFunction(students, el => el.name === "Alex"))

console.log(students.map(st => {
    return `Student ${st.name}: ${st.age}, ${st.scores}. ${st.isMarried ? "Married" : "Not married"}.`
}))


console.log(students.map(st => st.name === "Nick" ? {...st, isMarried:true} : st))   
