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
for (let i = 0; i < projects.length; i += 1) {
  document.getElementsByClassName('project')[i].addEventListener('click', () => {
    document.getElementsByClassName('work-title-popup')[1].innerHTML = works[i].title;
    document.getElementsByClassName('company')[1].innerHTML = works[i].company;
    document.getElementsByClassName('company-title')[1].innerHTML = works[i].companyTitle;
    document.getElementsByClassName('company-year')[1].innerHTML = works[i].year;
    // document.getElementsByClassName('work-description')[1].innerHTML = works[i].description;
    document.getElementsByClassName('work-image-popup')[0].src = works[i].image;
    document.getElementsByClassName('popup')[0].classList.toggle('isHidden');
    document.querySelector('header').classList.add('blur');
    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('blur');
    });
  });
}

document.getElementsByClassName('close-top-desktop')[0].addEventListener('click', () => {
  document.getElementsByClassName('popup')[0].classList.toggle('isHidden');
  document.querySelectorAll('section').forEach((section) => {
    if (section.classList.contains('blur')) {
      section.classList.remove('blur');
    }
  });
});

// Mobile Popup
const mobileProjects = document.getElementsByClassName('project-mobile');
for (let i = 0; i < mobileProjects.length; i += 1) {
  document.getElementsByClassName('project-mobile')[i].addEventListener('click', () => {
    document.getElementsByClassName('work-title-popup')[1].innerHTML = works[i].title;
    document.getElementsByClassName('company')[1].innerHTML = works[i].company;
    document.getElementsByClassName('company-title')[1].innerHTML = works[i].companyTitle;
    document.getElementsByClassName('company-year')[1].innerHTML = works[i].year;
    // document.getElementsByClassName('work-description')[1].innerHTML = works[i].description;
    document.getElementsByClassName('work-image')[0].src = works[i].image;
    document.getElementsByClassName('mobile-popup')[0].classList.toggle('isHidden');
    document.querySelector('header').classList.add('blur-mobile');
    document.querySelectorAll('section').forEach((section) => {
      section.classList.toggle('blur-mobile');
    });
  });
}

document.getElementsByClassName('close-top')[0].addEventListener('click', () => {
  document.getElementsByClassName('mobile-popup')[0].classList.toggle('isHidden');
  document.querySelectorAll('section').forEach((section) => {
    if (section.classList.contains('blur-mobile')) {
      section.classList.remove('blur-mobile');
    }
  });
});