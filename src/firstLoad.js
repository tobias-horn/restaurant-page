export default function firstLoad() {
    const hero = document.createElement("div")
    hero.className = "hero"
    const heading = document.createElement("div")
    heading.className = "heading"

    const img = document.createElement("img")
    img.src ="../src/img/icon.svg"
    heading.appendChild(img)

    const headingWrapper = document.createElement("div")
    headingWrapper.className = "heading-wrapper"
    const h1 = document.createElement("h1")
    h1.textContent ="Welcome to The Spice Boutique"
    const p = document.createElement("p")
    p.textContent ="Authentic, mouth-watering meals reflecting Arrakeens rich culture "

    headingWrapper.appendChild(h1)
    headingWrapper.appendChild(p)
    heading.appendChild(headingWrapper)

    
    const menuBar = document.createElement("div")
    menuBar.className = "menu-bar"

    const ul = document.createElement("ul")
    ul.innerHTML = `<li><button id="home">Home</button></a></li>
    <li><button id="menu">Menu</button></a></li>
    <li><button id="contact">Contact</button></a></li>`
    menuBar.appendChild(ul)
    const parentWrapper = document.createElement("div")
    parentWrapper.id = "parentWrapper"
    
  
    

    

    hero.appendChild(heading)
    hero.appendChild(menuBar)
    hero.appendChild(parentWrapper)


    return hero
  }