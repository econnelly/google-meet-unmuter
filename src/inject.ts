async function unmuteGoogleMeet() {
    let divs = document.getElementsByTagName("button")
    let count = divs.length

    for (let i = 0; i < count; i++) {
        if (divs[i].getAttribute("data-is-muted") != undefined) {

            if (divs[i].getAttribute("data-is-muted").toLocaleLowerCase() == "true") {
                const buttonIcons = divs[i].getElementsByTagName("div")
                for (let j = 0; j < buttonIcons.length; j++) {
                    if (buttonIcons[j].getAttribute('data-icon-type') == "4") {
                        console.log("Found mute button!")
                        divs[i].click()
                    }
                }
            }
        }
    }
}

(function (){
    unmuteGoogleMeet()
})()