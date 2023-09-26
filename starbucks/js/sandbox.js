console.log("Sandbox.js is working");

const cars = [
    {
        name: "Ford",
        price: 2000,
    },
    {
        name: "Chevy",
        price: 2500,
    },
    {
        name: "BMW",
        price: 3000,
    },
    {
        name: "Audi",
        price: 3500,
    },
    {
        name: "Ferrari",
        price: 4000,
    }
]; // end of cars array

// console.log({cars});

const filteredCars = cars.filter((car) => {
    return car.price > 2500;
}); // end of filter method

console.log({filteredCars});