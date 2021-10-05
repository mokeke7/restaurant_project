

const createMenu = () => {
    const content = document.getElementById("element");
    content.innerHTML = "";

    if (!content.innerHTML) {
    // const menu = document.createElement("div");
    // menu.id = "menuContent";

    // content.innerHTML = "";
    const menu = document.createElement("div");
    menu.classList.add("menu");


    // menu.appendChild(
    //   createMenuItem(
    //     "Salsiccia",
    //     "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    //   )
    // );
    menu.appendChild(
      createMenuItem(
        "Gamberi",
        "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Pepe",
        "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
      )
    );
    // menu.appendChild(
    //   createMenuItem(
    //     "Disgustoso",
    //     "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    //   )
    // );
    // menu.appendChild(
    //   createMenuItem(
    //     "Colorato",
    //     "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    //   )
    // );
    // menu.appendChild(
    //   createMenuItem(
    //     "Pomodoro",
    //     "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    //   )
    // );
    menu.appendChild(
      createMenuItem(
        "Crema",
        "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Carne",
        "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
      )
    );

    content.appendChild(menu);
    // return menu;
    }
    else {
      content.innerHTML = "";
    }

}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h3");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
    foodDescription.className = "desc"

    const foodImage = document.createElement("img");
    foodImage.rel = "preload";
    foodImage.src = `images/pastas/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;
    foodImage.className = "food";

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
  }

export default createMenu