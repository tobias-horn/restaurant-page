export default function contact() {

    const wrapper = document.createElement("div")
    wrapper.className = "wrapper"

    const contact = document.createElement("div")
    contact.className = "contact"


    const h2 = document.createElement("h2")
    h2.textContent = "Contact us"
    contact.appendChild(h2)

    const p = document.createElement("p")
    p.textContent = "If you have any questions, concerns or other inquries feel free to contact us"
    contact.appendChild(p)
    
    const contactInfo = document.createElement("p")
    contactInfo.innerHTML = `<span class="bold">Telephone: </span>+33 3829 3892`
    contact.appendChild(contactInfo)


    const form = document.createElement("form")
    form.innerHTML = `<label for="firstname">First Name</label>
    <input type="text" id="firstName" name="firstname" placeholder="Your name..">

    <label for="lastname">Last Name</label>
    <input type="text" id="lastname" name="lastname" placeholder="Your last name..">

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <button id="submit">Submit</button>`
    
    
    contact.appendChild(form)


   

    
    wrapper.appendChild(contact)


    return wrapper
}