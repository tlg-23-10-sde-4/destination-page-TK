user_input_form.addEventListener("submit", (e) => {
    e.preventDefault()
    const PLACE_HOLDER_PHOTO_URL = 
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1730930/ss_00ffecff4786cd852074e66a4323e01ab4685fd4.1920x1080.jpg?t=1687178642"
    
    const destinationName = destination_name.value
    const locationName = location_name.value
    const photoUrl = photo_URL.value || PLACE_HOLDER_PHOTO_URL
    const descript = description.value

    user_input_form.reset()

    const card = createCard({destinationName, locationName, photoUrl, descript});

    display_box.appendChild(card)

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
    <button type="button" class="btn btn-info">Edit</button>
    <button type="button" class="btn btn-danger" id="delete_button" >Delete</button>
    </div>`
    return card
}
    
