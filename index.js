function toggleNav() {
  const hamburgerElement = document.getElementsByClassName('hamburger')[0];
  const closeElement = document.getElementsByClassName('close')[0];
  const mobileLinksElement = document.getElementsByClassName('mobile-links')[0];
  hamburgerElement.classList.toggle('isHidden');
  document.getElementsByClassName('logo')[0].classList.toggle('isHidden');
  closeElement.classList.toggle('isHidden');
  mobileLinksElement.classList.toggle('isHidden');
}

document.getElementsByClassName('hamburger')[0].addEventListener('click', toggleNav);
document.getElementsByClassName('close')[0].addEventListener('click', toggleNav);
document.getElementsByClassName('mobile-links')[0].addEventListener('click', toggleNav);

// Loop throught the elements with className projects and add the event listener
const projects = document.getElementsByClassName('project');
console.log(projects);
for (let i = 0; i < projects.length; i += 1) {
  document.getElementsByClassName('project')[i].addEventListener('click', () => {
    document.getElementsByClassName('popup')[0].classList.toggle('isHidden');
    document.querySelectorAll('section').forEach((section) => {
      section.classList.toggle('blur');
    });
  });
}

document.getElementsByClassName('close-top-desktop')[0].addEventListener('click', () => {
  document.getElementsByClassName('popup')[0].classList.toggle('isHidden');
  document.querySelectorAll('section').forEach((section) => {
    section.classList.toggle('blur');
  });
});