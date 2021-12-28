export default function menu() {

    let foodMenu = []
    let drinkMenu = []

    const foodMenuFactory = (name, description, price) => {
        let object =  {name, description, price}
        foodMenu.push(object)
    }

    const drinkMenuFactory = (name, description, price) => {
        let object =  {name, description, price}
        drinkMenu.push(object)
    }

    let dottedLine = document.createElement("hr")
    dottedLine.className = "dotted"

    let dottedLine2 = document.createElement("hr")
    dottedLine2.className = "dotted"


foodMenuFactory("Pundi Rice", "Freshly imported from Caladan", "5W$")
foodMenuFactory("Tabara", "A sweet honey cake of heavy consistency, a mixture of cooked and mashed tabaroot, honey and spices pressed into a dish. This is sprinkled with sugar, dried seeds and crystallized fruit. <br> Served as tiny triangles with fruits and hot spiced coffee", "10W$")
foodMenuFactory("Turtlebug", "Sweet tasting turtlebugs served in juicy musha sauce ", "6W$")

drinkMenuFactory("Spice coffee", "Enjoy a cup of hot and fresh spice coffee, the best you will find on Arrakis", "2W$")

drinkMenuFactory("Spice beer", "Alocolic beverage made with spice melange.", "4W$")

drinkMenuFactory("Caladian wine", "A vintage of highest quality, grow with great care by the vintners of the near-water world of Caladan.", "15W$")

const wrapper = document.createElement("div")

wrapper.className = "wrapper"
const menuWrapper = document.createElement("div")
menuWrapper.className = "menu"
const h2 = document.createElement("h2")
h2.textContent = "Food"

const p = document.createElement("p")
p.textContent = "We source our ingredientst only from the most trusted supplier and make each meal with love and care"

menuWrapper.appendChild(h2)
menuWrapper.appendChild(p)






foodMenu.forEach((meal) => {


    const mealWrapper = document.createElement("div")
    mealWrapper.className = "meal-wrapper"

    mealWrapper.innerHTML = `<div class="info-wrapper">
    <p class="meal-name">${meal.name}</p>
    <p class="meal-description">${meal.description}</p>
</div>
<div class="meal-price-wrapper">
    <p>${meal.price}</p>
</div>`

menuWrapper.appendChild(mealWrapper)
console.log(menuWrapper)


})

menuWrapper.appendChild(dottedLine)

const h22 = document.createElement("h2")
h22.textContent = "Beverages"

menuWrapper.appendChild(h22)

const p2 = document.createElement("p")
p.textContent = "Wether it's warm or cold, at The Spice Boutique you can always enjoy your favorite drink and celebrate the wonders of life "
menuWrapper.appendChild(p2)


drinkMenu.forEach((drink) => {


    const mealWrapper = document.createElement("div")
    mealWrapper.className = "meal-wrapper"

    mealWrapper.innerHTML = `<div class="info-wrapper">
    <p class="meal-name">${drink.name}</p>
    <p class="meal-description">${drink.description}</p>
</div>
<div class="meal-price-wrapper">
    <p>${drink.price}</p>
</div>`

menuWrapper.appendChild(mealWrapper)



})





menuWrapper.appendChild(dottedLine2)

wrapper.appendChild(menuWrapper)
return wrapper

}

