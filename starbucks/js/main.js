// console.log("js has been loaded");

// variables, methods and functions

// 1. variables
const myName = "Alex Levy";
console.log(myName);

const myAge = 21;
const myCity = "Syracuse"
const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`;
console.log(introduction);

// 2. methods
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn")
 const overlay = document.getElementById("overlay");
console.log(menuBtn);

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); // end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
} ) // end of closeBtn click event

// arrays and objects

// basic variables
const coffeeName = "Mocha";
const coffeeHeadline = document.createElement("h2");
coffeeHeadline.textContent = coffeeName;
// document.body.appendChild(coffeeHeadline);

// objects




const coffees = [
    {
        name: "Mocha",
        price: 3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName: "coffee.jpg",
            width: 630,
            height: 630,
            altText: "A cup of coffee."
        }
    },
    {
        name: "Espresso",
        price: 3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName: "coffee.jpg",
            width: 630,
            height: 630,
            altText: "A cup of coffee."
        }
    },
    {
        name: "Latte",
        price: 3.99,
        description: "This is a delicious cup of coffee",
        image: {
            fileName: "coffee.jpg",
            width: 630,
            height: 630,
            altText: "A cup of coffee."
        }
    }
];
//console.log(coffees[2]);

coffees.forEach(function(coffee) {
    // deconstruct the coffee object
    const {name, price, description, image} = coffee;

    //2. Create the html element
    const coffeeArticle = document.createElement("article")

    const coffeeName = document.createElement("h2");
    coffeeName.textContent = name;
    
    const coffeePrice = document.createElement("h3");
    coffeePrice.textContent = price;

    const coffeeDescription = document.createElement("p");
    coffeeDescription.textContent = description;

    const coffeeImage = document.createElement("img");
    coffeeImage.src = `images/${image.fileName}`;
    coffeeImage.width = `images/${image.width}`;
    coffeeImage.height = `images/${image.height}`;
    coffeeImage.alt = `images/${image.altText}`;

// 3. Append the elements to the parent article
coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeName);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);
    

    // 4. Append the article to the body
    document.body.appendChild(coffeeArticle);

    //const coffeeSecondaryHeadline = document.createElement("h2");
    //coffeeSecondaryHeadline.textContent = name;
   // document.body.appendChild(coffeeSecondaryHeadline);
    //console.log(coffee);
}); // end of coffees forEach method
