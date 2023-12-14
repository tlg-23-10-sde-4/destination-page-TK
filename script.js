user_input_form.addEventListener("submit", (e) => {
    e.preventDefault()
    const PLACE_HOLDER_PHOTO_URL = "https://cdn.cloudflare.steamstatic.com/steam/apps/1730930/ss_00ffecff4786cd852074e66a4323e01ab4685fd4.1920x1080.jpg?t=1687178642"
    const destinationName = destination_name.value
    const locationName = location_name.value
    const photoUrl = photo_URL.value || PLACE_HOLDER_PHOTO_URL
    const descript = description.value

    user_input_form.reset()

    console.log(destinationName, locationName, photoUrl, descript);
})
    
