const displayHome = () => {
    let content = document.getElementById("content");
    let header = document.createElement("header");
    content.appendChild(header);
    let leftMenu = document.createElement("ul");
    leftMenu.id = "left-menu";
    let li1 = document.createElement("li");
    li1.id = "info";
    li1.innerHTML = "About us";
    let li2 = document.createElement("li");
    li2.id = "menu";
    li2.innerHTML = "Menu";
    leftMenu.appendChild(li1);
    leftMenu.appendChild(li2);

    let restaurantName = document.createElement("h2");
    restaurantName.id = "restaurant-name";
    restaurantName.innerHTML = "The Bismarck"

    let rightMenu = document.createElement("ul");
    rightMenu.id = "right-menu";
    let li3 = document.createElement("li");
    li3.id = "book";
    li3.innerHTML = "Reservation";
    let li4 = document.createElement("li");
    li4.id = "contact";
    li4.innerHTML = "Contact";
    rightMenu.appendChild(li3);
    rightMenu.appendChild(li4);

    header.appendChild(leftMenu);
    header.appendChild(restaurantName);
    header.appendChild(rightMenu);
    let displayArea = document.createElement("div");
    let footer = document.createElement("footer");
    displayArea.id = "element";
    content.appendChild(displayArea);
    content.appendChild(footer);

    return content
}

export default displayHome