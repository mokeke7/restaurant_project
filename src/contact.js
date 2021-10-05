
const displayContact = () => {
    const content = document.getElementById("element");

    content.innerHTML = "";
    if (!content.innerHTML) {
        content.appendChild(
            createContent(
                "Location",
                "X:9 Y:8 Limsa Lominsa Upper Decks Eorzea"
            )
        )

        content.appendChild(
            createContent(
                "Hours",
                "Mon - Thu : 11 am - 21 pm<br>\Fri - Sat : 11 am - 23 pm"
            )
        )


        content.appendChild(
            createContent(
                "Contact",
                "0728376583<br>\ bismarck@eorzea.com"
            )
        )

        // createContent("location", "X:9 Y:8 Limsa Lominsa Upper Decks Eorzea")
        // createContent("Hours", "")
        // createContent("Contact", "0728376583 bismarck@eorzea.com")
    }
    else {
        content.innerHTML = "";
    }
}


const createContent = (title, content) => {
    const newDiv = document.createElement("div")

    const header = document.createElement("h3")
    header.innerHTML = title;
    if (title == "Location") {
        newDiv.appendChild(header)

        const map = document.createElement("img")
        map.src = "./images/Limsa_Lominsa_Upper_Decks_cropped.png"
        newDiv.appendChild(map)
        const contents = document.createElement("p")
        contents.innerHTML = content;
        contents.className = "information"
        newDiv.appendChild(contents)

    }
    else {
        const contents = document.createElement("p")
        contents.innerHTML = content;
        contents.className = "information"
        newDiv.appendChild(header)
        newDiv.appendChild(contents)

    }



    return newDiv

}


export default displayContact