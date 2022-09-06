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

const works = [
  {
    title: 'Tonic',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'images/work1.png',
    link: 'https://www.google.com',
  },
  {
    title: 'Mutli-Post Stories',
    company: 'FACEBOOK',
    companyTitle: 'Full Stack Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'images/work2.png',
    link: 'https://www.google.com',
  },
  {
    title: 'Facebook 360',
    company: 'FACEBOOK',
    companyTitle: 'Full Stack Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'images/work3.png',
    link: 'https://www.google.com',
  },
  {
    title: 'Uber Navigation',
    company: 'CANOPY',
    companyTitle: 'Back End Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'images/work4.png',
    link: 'https://www.google.com',
  },
];

const projects = document.getElementsByClassName('project');
const mobileProjects = document.getElementsByClassName('project-mobile');

// Function to blur the background when the popup is open
function blurBackground(blurClassName) {
  document.querySelector('header').classList.add(blurClassName);
  document.querySelectorAll('section').forEach((section) => {
    section.classList.add(blurClassName);
  });
}

function unBlurBackground(blurClassName) {
  document.querySelector('header').classList.remove(blurClassName);
  document.querySelectorAll('section').forEach((section) => {
    if (section.classList.contains(blurClassName)) {
      section.classList.remove(blurClassName);
    }
  });
}

// Function to set the work cards
function setWorkCards(projectsEl, popupClassName, title, company, companyTitle, year, image) {
  for (let i = 0; i < projectsEl.length; i += 1) {
    projectsEl[i].addEventListener('click', () => {
      document.getElementsByClassName(title)[1].innerHTML = works[i].title;
      document.getElementsByClassName(company)[1].innerHTML = works[i].company;
      document.getElementsByClassName(companyTitle)[1].innerHTML = works[i].companyTitle;
      document.getElementsByClassName(year)[1].innerHTML = works[i].year;
      document.getElementsByClassName(image)[0].src = works[i].image;
      document.getElementsByClassName(popupClassName)[0].classList.toggle('isHidden');
      if (window.innerWidth > 992) {
        blurBackground('blur');
      } else {
        blurBackground('blur-mobile');
      }
    });
  }
}

// Function to close the popup
function closePopup(closeIconClass, popupClass, blurClassName) {
  document.getElementsByClassName(closeIconClass)[0].addEventListener('click', () => {
    document.getElementsByClassName(popupClass)[0].classList.toggle('isHidden');
    unBlurBackground(blurClassName);
  });
}

// Call setWorkCards function for each project
setWorkCards(projects, 'popup', 'work-title-popup', 'company', 'company-title', 'company-year', 'work-image-popup');
setWorkCards(mobileProjects, 'mobile-popup', 'work-title-popup', 'company', 'company-title', 'company-year', 'work-image');

// Call closePopup function for each project
closePopup('close-top-desktop', 'popup', 'blur');
closePopup('close-top', 'mobile-popup', 'blur-mobile');