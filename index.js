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

// Add work section
function addDesktopWorkSection() {
  const workSection = document.getElementsByClassName('works')[0];
  works.forEach((work) => {
    const workElement = document.createElement('div');
    workElement.classList.add('work');
    workElement.innerHTML = `
    <div class="work-container">
    <div class="work">
        <div class="img-container">
            <img src="${work.image}"  class="work-image" alt="Showcase of the work"> 
        </div>
        <div class="work-details">
            <h2 class="work-title">${work.title}</h2>
            <div class="work-subtitle">
                <p class="company">${work.company}</p>
                <img src="images/counter.png" width="10" height="10" alt="counter">
                <p>${work.companyTitle}</p>
                <img src="images/counter.png" alt="counter">
                <p>${work.year}</p>
            </div>
            <p class="work-description">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
            <ul class="tags">
                <li class="tag">html</li>
                <li class="tag">css</li>
                <li class="tag">javascript</li>
            </ul>
            <button class="work-link project">See Project</button>
        </div>   
    </div>
</div>
    `;
    workSection.appendChild(workElement);
  });
}

function addMobileWorkSection() {
  const workSection = document.getElementsByClassName('works-mobile')[0];
  works.forEach((work) => {
    const workElement = document.createElement('div');
    workElement.classList.add('work');
    workElement.innerHTML = `
    <div class="work-container">
            <div class="work">
                <div class="img-container">
                    <img src="${work.image}"  class="work-image" alt="Showcase of the work"> 
                </div>
                <div class="work-details">
                    <h2 class="work-title">Tonic</h2>
                    <div class="work-subtitle">
                        <p class="company">Canopy</p>
                        <img src="images/counter.png" width="10" height="10" alt="counter">
                        <p>Back End Dev</p>
                        <img src="images/counter.png" alt="counter">
                        <p>2015</p>
                    </div>
                    <p class="work-description">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
                    <ul class="tags">
                        <li class="tag">html</li>
                        <li class="tag">css</li>
                        <li class="tag">javascript</li>
                    </ul>
                    <button class="work-link project-mobile">See Project</button>
                </div>   
            </div>
        </div>
    `;
    workSection.appendChild(workElement);
  });
}

addDesktopWorkSection();
addMobileWorkSection();

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

// Get the form element
const formElement = document.getElementsByClassName('form-section')[0];