// console.log("coffeeApp!");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn")
const overlay = document.getElementById("overlay");
const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");
const priceRanges = document.getElementById("priceRanges");
const coffeeList = document.getElementById("coffeeList");

let filteredCoffees = [...coffees];
let sortDirection = "ascending";


const buildTextElement = (element, className, content) => {
    const newElement = document.createElement(element)
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}
const displayList = (arr) => {
    purgeList();
    arr.forEach((coffee) => {
        //1. deconstruct the coffee object
    const {title, price, description, image} = coffee;
    
        //2. Create the html element
        const coffeeArticle = document.createElement("article")
        coffeeArticle.classList.add("coffee-item")
    
        // const coffeeTitle = document.createElement("h2");
        // coffeeTitle.textContent = title;
        // coffeeTitle.classList.add("coffee-title")
    
        const coffeeTitle = buildTextElement("h2", "coffee-title", title);
        const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);
        
        // const coffeePrice = document.createElement("h3");
        // coffeePrice.textContent = price;
        // coffeePrice.classList.add("coffee-price")
        // coffeePrice.textContent = `$${price}`;
    
        const coffeeDescription = buildTextElement("p", "coffee-description", description);
    
        // const coffeeDescription = document.createElement("p");
        // coffeeDescription.classList.add("coffee-description");
        // coffeeDescription.textContent = description;
        
    
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
}
const purgeList = () => {
    coffeeList.innerHTML = "";  
}
const sortListByDirection = (direction, arr) => {
    sortDirection = direction;
    //console.log({direction});
    const sortedListArr = [...arr].sort((a,b) => {
        if (direction === "ascending") {
            if (a.title < b.title) {
                return -1;
            } 
        } else {
            if (a.title > b.title) {
                return -1;
            }
        }
    });
    return sortedListArr;
}

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
    // purgeList();
    const sortedList = sortListByDirection("ascending", filteredCoffees);
    // console.log({sortedList});
    displayList(sortedList);
});

// descending button click event
descendingBtn.addEventListener ("click", function() {
    console.log("Descending button clicked");
    // purgeList();
    const sortedList = sortListByDirection("descending", filteredCoffees);
    // console.log({sortedList});
    displayList(sortedList);

});

priceRanges.addEventListener("change", (event) => {
    console.log("price range has been changed");
    console.log(event.target.value);
    const selectedRange = event.target.value;

    if (selectedRange === "all") {
        // purgeList();
        // displayList (coffees);
        filteredCoffees = sortListByDirection(sortDirection, [...coffees]);
    } else {
            // "2-3" becomes [2,3]
    const [minValue, maxValue] = selectedRange.split("-");
    console.log({minValue, maxValue});
    // getFilteredCoffees(minValue, maxValue);
    const filteredCoffees = getFilteredCoffees(minValue, maxValue);

    // purgeList();
    displayList (filteredCoffees);
    }



    
});

const getFilteredCoffees = (minValue, maxValue) => {
    const filteredCoffees = coffees.filter((coffee) => {
        const { price } = coffee;
        return price >= minValue && price <= maxValue;
    });
    return filteredCoffees;
}
const sortedStarterList = sortListByDirection("ascending", filteredCoffees);
console.log({filteredCoffees});

displayList(sortedStarterList);