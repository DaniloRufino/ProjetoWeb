const userProfileImage = document.getElementById("profile-image");
const userProfileMenu = document.getElementById("profile-image-menu");
userProfileImage.addEventListener("click", () => {toogleUserProfileMenu();});

function toogleUserProfileMenu() {
    let displayType = userProfileMenu.style.display;
    if (displayType== "block") {
        userProfileMenu.style.display = "none";
    } else {
         userProfileMenu.style.display = "block";
    }

}




/**
 * Toogles the display
 * @param {*} element The element to toogle the display
 * @param {*} displayType Can Be "Block,none,etc"
 */
function toggleDisplay(element, displayType) {
    element.style.display = displayType;
}