// old function syntax
// function calculateAverage (a,b) {
//     const result = (a + b) / 2;
//     return result;
// }

// console.log(calculateAverage(4,27));

const calculateAverage = (a,b) => {
    return (a+b)/2;
}

console.log(calculateAverage(4,27));

const addTen = num => num + 10;

console.log(addTen(36));

// const beatles = ['Paul', 'George', 'Ringo', 'John'];
// // console.log({beatles});
// beatles.forEach((beatle) => {
//     console.log({beatle});
// });

// beatles.sort();
// console.log({beatles});

// const sortedBeatles = [...beatles].sort((a,b) => {
//     console.log({a,b});
//     if (a > b) {
//         return -1;
//     }
// });

// // -1, 0, 1



// console.log({sortedBeatles});

const beatles = [
    {
        name: "Paul",
        age: 78
    },
    {
        name: "George",
        age: 75
    },
    {
        name: "Ringo",
        age: 80
    },
    {
        name: "John",
        age: 40
    }
];

const sortedBeatlesByAge = [...beatles].sort((a,b) => {
    if (a.age > b.age) {
        return -1;
    }
});
console.log({sortedBeatlesByAge});