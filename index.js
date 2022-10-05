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
    title: 'To-do list',
    company: 'Microverse',
    companyTitle: 'Full Stack Developer',
    year: 2022,
    description: '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. A simple website that allows for doing that, and built using ES6 and Webpack!',
    tags: ['html', 'css', 'javascript', 'webpack'],
    image: 'images/realtodo.png',
    source: 'https://github.com/didierganthier/todo-list/',
    link: 'https://didierganthier.github.io/todo-list/',
  },
  {
    title: 'Mutli-Post Stories',
    company: 'FACEBOOK',
    companyTitle: 'Full Stack Dev',
    year: 2015,
    description: '',
    tags: ['html', 'css', 'javascript'],
    image: 'images/work2.png',
    source: 'https://github.com/didierganthier/todo-list/',
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
    source: 'https://github.com/didierganthier/todo-list/',
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
    source: 'https://github.com/didierganthier/todo-list/',
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
            <p class="work-description">${work.description ? `${work.description}` : 'A daily selection of privately personalized reads; no accounts or sign-ups required.'}</p>
            <ul class="tags">
            ${work.tags.map((tag) => `<li class="tag">${tag}</li>`).join('')}
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
                    <p class="work-description">${work.description ? `${work.description}` : 'A daily selection of privately personalized reads; no accounts or sign-ups required.'}</p>
                    <ul class="tags">
                    ${work.tags.map((tag) => `<li class="tag">${tag}</li>`).join('')}
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
      // Set description
      if (works[i].description) {
        document.getElementsByClassName('work-description')[0].innerHTML = works[i].description;
        document.getElementsByClassName('work-description')[1].innerHTML = works[i].description;
      } else {
        document.getElementsByClassName('work-description')[0].innerHTML = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
        document.getElementsByClassName('work-description')[1].innerHTML = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
      }

      // Set tags
      document.getElementsByClassName('tags')[0].innerHTML = '';
      document.getElementsByClassName('tags')[1].innerHTML = '';
      works[i].tags.forEach((tag) => {
        const tagEl = document.createElement('li');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        document.getElementsByClassName('tags')[0].appendChild(tagEl);
        document.getElementsByClassName('tags')[1].appendChild(tagEl);
      });
      // Set link
      document.getElementsByClassName('work-link')[0].href = works[i].link;
      document.getElementsByClassName('work-link')[1].href = works[i].source;
      document.getElementsByClassName('work-link')[2].href = works[i].link;
      document.getElementsByClassName('work-link')[3].href = works[i].source;
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

// Get the render element
const renderElement = document.getElementsByClassName('render')[0];

// Check if the email is lowercase
function checkEmail(email) {
  return email === email.toLowerCase();
}

// Check if the email is valid
// function validateEmail(email) {
//   const re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

// Remove error after 5 seconds
function removeError() {
  setTimeout(() => {
    renderElement.classList.remove('error');
    renderElement.classList.remove('success');
    renderElement.innerHTML = '';
  }, 5000);
}

// Function to validate the form
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    renderElement.classList.add('error');
    renderElement.innerHTML = 'All fields are required';
    removeError();
    return false;
  }

  if (!checkEmail(email)) {
    renderElement.classList.add('error');
    renderElement.innerHTML = 'Email must be lowercase';
    removeError();
    document.getElementById('email').value = email.toLowerCase();
    renderElement.innerHTML = 'We put it in lowercase for you 🥳 You may submit';
    renderElement.classList.add('success');
    removeError();
    return false;
  }

  return true;
}

// Function to submit the form
function submitForm() {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      // submit the form
      formElement.submit();
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      renderElement.classList.remove('error');
      renderElement.classList.remove('isHidden');
      renderElement.classList.add('success');
      renderElement.innerHTML = 'Your message has been sent';
      removeError();
    }
  });
}

submitForm();

// Use local storage to save user input.
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Get user input from local storage input object and set it to the form
function getUserInput() {
  const input = JSON.parse(localStorage.getItem('input'));
  if (input) {
    name.value = input.name;
    email.value = input.email;
    message.value = input.message;
  }
}

// Save user input to local storage in an object
function saveInput() {
  const input = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('input', JSON.stringify(input));
}

// Call getInput function
getUserInput();

// When the user changes the content of any input field, the data is saved to the local storage.
name.addEventListener('input', saveInput);
email.addEventListener('input', saveInput);
message.addEventListener('input', saveInput);

// Remove local storage when reset button is clicked
function resetForm() {
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    localStorage.removeItem('input');
  });
}

resetForm();
