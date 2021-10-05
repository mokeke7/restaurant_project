

const displayInfo = () => {
    const content = document.getElementById("element");
    content.innerHTML = "";

    if (!content.innerHTML) {
        const image = document.createElement("img");
        image.src = "./images/pexels-andrea-piacquadio-3785693 (1).jpg"
        image.id = "owner";

        const info = document.createElement("p");
        info.innerHTML = "Welcome to The Bismarck! Come and taste one of the best italian restaurant in Eorzea!!"
        info.className = "info"
        content.appendChild(image);
        content.appendChild(info);

    }
    else {
        content.innerHTML = "";

    }
}


export default displayInfo