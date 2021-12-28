export default function home() {

    const wrapper = document.createElement("div")
    wrapper.className = "wrapper"

    const h2 = document.createElement("h2")
    h2.textContent = "About"
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    p1.textContent = "Located inside the heart of Arrakeen, we provide delicous food for both young and old."
    p2.textContent = "Our meals are highly praised by critics and received numerous awards including a visit from Duke Leto Atreides"
    p3.textContent = "Feel free to take a look at our menus or visit us in person at our location right across the Arrakeen post office"
    wrapper.appendChild(h2)
    wrapper.appendChild(p1)
    wrapper.appendChild(p2)
    wrapper.appendChild(p3)

    return wrapper

}