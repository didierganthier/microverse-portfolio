//toggle navigation on click
function toggleNav() {
    var hamburgerElement = document.getElementsByClassName("hamburger")[0];
    var closeElement = document.getElementsByClassName("close")[0];
    var mobileLinksElement = document.getElementsByClassName("mobile-links")[0];
    //hide element by removing style
    hamburgerElement.classList.toggle("isHidden");
    document.getElementsByClassName("logo")[0].classList.toggle("isHidden");
    closeElement.classList.toggle("isHidden");
    mobileLinksElement.classList.toggle("isHidden");

    console.log("toggleNav");
}

document.getElementsByClassName("hamburger")[0].addEventListener("click", toggleNav);
document.getElementsByClassName("close")[0].addEventListener("click", toggleNav);
document.getElementsByClassName("mobile-links")[0].addEventListener("click", toggleNav);