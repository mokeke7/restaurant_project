import displayHome from "./home";
import createMenu from "./menu"
import displayInfo from "./info"
import displayBooking from "./book"
import displayContact from "./contact"

const enableNavBar = () => {
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        createMenu();
    })
    const info = document.getElementById("info");
    info.addEventListener("click", () => {
        displayInfo();
    })
    const contact = document.getElementById("contact");
    contact.addEventListener("click", () => {
        console.log("hey im hereeee")
        displayContact()
    })
    const book = document.getElementById("book");
    book.addEventListener("click", () => {
        displayBooking();
    })
}








displayHome();
enableNavBar();
