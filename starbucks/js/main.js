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
const coffeeList = document.getElementById("coffeeList");
const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");

function purgeList() {
    coffeeList.innerHTML = ""
}
function sortList() {
    
}

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); // end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
} ) // end of closeBtn click event

// ascending button click event
ascendingBtn.addEventListener ("click", function() {
    console.log("AscendingBtn clicked");
    purgeList();
    sortList("ascending");
})

// descending button click event
descendingBtn.addEventListener ("click", function() {
    console.log("Descending button clicked");
    purgeList();
    sortList("descending");
})

// arrays and objects

// basic variables
const coffeeName = "Mocha";
const coffeeHeadline = document.createElement("h2");
coffeeHeadline.textContent = coffeeName;
// document.body.appendChild(coffeeHeadline);

// objects




// const coffees = [
//     {
//         name: "Mocha",
//         price: 3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     },
//     {
//         name: "Espresso",
//         price: 3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     },
//     {
//         name: "Latte",
//         price: 3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     }
// ];
//console.log(coffees[2]);

function buildTextElement(element,className,content) {
    const newElement = document.createElement(element)
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}

const sortedCoffees = [...coffees].sort(function(a,b) {
    if ( a.title < b.title) {
        return -1
    }
    if (a.title > b.title) {
        return 1
    }
    if (a.title === b.title) {
        return 0;
    }
});

sortedCoffees.forEach(function(coffee) {
    //1. deconstruct the coffee object
const {title, price, description, image} = coffee;

    //2. Create the html element
    const coffeeArticle = document.createElement("article")
    coffeeArticle.classList.add("coffee-item")

    // const coffeeTitle = document.createElement("h2");
    // coffeeTitle.textContent = title;
    // coffeeTitle.classList.add("coffee-title")

    const coffeeTitle = buildTextElement("h2", "coffee-title", title);
    
    // const coffeePrice = document.createElement("h3");
    // coffeePrice.textContent = price;
    // coffeePrice.classList.add("coffee-price")
    // coffeePrice.textContent = `$${price}`;

    const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);

    const coffeeDescription = document.createElement("p");
    coffeeDescription.classList.add("coffee-description");
    coffeeDescription.textContent = description;
    

    const coffeeImage = document.createElement("img");
    coffeeImage.src = `images/${image.fileName}`;
    coffeeImage.width = image.width;
    coffeeImage.height = image.height;
    coffeeImage.alt = image.altText;

// 3. Append the elements to the parent article
    coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeTitle);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);
    

    // 4. Append the article to the body
    coffeeList.appendChild(coffeeArticle);

    //const coffeeSecondaryHeadline = document.createElement("h2");
    //coffeeSecondaryHeadline.textContent = name;
   // document.body.appendChild(coffeeSecondaryHeadline);
    //console.log(coffee);
}); // end of coffees forEach method
