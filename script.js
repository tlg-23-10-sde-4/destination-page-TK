user_input_form.addEventListener("submit", (e) => {
    e.preventDefault()
    const PLACE_HOLDER_PHOTO_URL = 
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1730930/ss_00ffecff4786cd852074e66a4323e01ab4685fd4.1920x1080.jpg?t=1687178642"
    
    const destinationName = destination_name.value
    const locationName = location_name.value
    const photoUrl = photo_URL.value || PLACE_HOLDER_PHOTO_URL
    let descript = description.value

    user_input_form.reset()

    const card = createCard({destinationName, locationName, photoUrl, descript});

    display_box.appendChild(card)

    cards_container.addEventListener("click", (e) => {
        const clickedElt = e.target

        if (clickedElt.getAttribute("btn_type") === "delete") {
            clickedElt.parentElement.parentElement.remove()
        } else if (clickedElt.getAttribute("btn_type") === "edit") {
            handleEdit(clickedElt)
        }
    })

    function handleEdit(editBtn) {
        const cardBody = editBtn.parentElement
        const oldDestName = cardBody.children[0].textContent
        const oldLocName = cardBody.children[1].textContent
        const oldPhotoUrl = cardBody.previousSiblingElement.getAttribute("src")

        const oldDesc = cardBody.children[2].tagName === "p" ? cardBody.children[2].textContent : ""
        
        const newDestName = prompt("Enter new destination name", oldDestName)
        const newLocName = prompt("Enter new location name", oldLocName)
        const newPhotoUrl = prompt("Enter new photo URL", oldPhotoUrl)
        const newDesc = prompt("Enter new description", oldDesc)
        if (newDestName && newDestName !== oldDestName){
            cardBody.children[0].textContent = newDestName
        }
    }

    delete_button.addEventListener("click", function () {
        card.remove()
    })
    
  
    
})

function createCard({destinationName, locationName, photoUrl, descript}) {   

    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("style", "width: 18rem;")
    
    card.innerHTML = ` 
    <img src=${photoUrl} class="card-img-top" alt=${destinationName} at ${locationName}>
    <div class="card-body">
    <h5 class="card-title">${destinationName}</h5>
    <p class="card-text">${locationName}</p>
    ${descript && `<p class="card-text"}>${descript}</p>`}
    <button type="button" class="btn btn-info" id="edit_button">Edit</button>
    <button type="button" class="btn btn-danger" id="delete_button" >Delete</button>
    </div>`
    return card
}
    
