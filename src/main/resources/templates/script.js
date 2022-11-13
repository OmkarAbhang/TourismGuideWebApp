const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []



searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  console.log(value);
  users.forEach(user => {
    console.log(user);
    var name = user.placename;
    var desc = user.about;
    console.log(name+ " laka "+ desc);
    console.log(name.toLowerCase());
    console.log(desc.toLowerCase());
    
    const isVisible = name.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible)
  })
})


fetch("http://localhost:8080/travel/fetch/places")
.then(res => res.json())
.then(data => {
        users = data.map(user => { 
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.placeName
        body.textContent = user.description
        userCardContainer.append(card)
        return {placename: user.placeName, about: user.description, element: card}
    });   
})
