const nav = document.querySelector('.nav');
const navAbout = document.querySelector('.nav-about');
const navSkill = document.querySelector('.nav-skill');
const navMain = document.querySelector('.nav-main-project');
const navSub = document.querySelector('.nav-sub-project');
const navComingSoon = document.querySelector('.nav-coming-soon');
const navCunnect = document.querySelector('.nav-cunnect');

const profile = document.querySelector('.profile');
const aboutSection = document.querySelector('.about-me');
const skillSection = document.querySelector('.skill');
const mainProjectSection = document.querySelector('.project');
const subProjectSection = document.querySelector('.mini');
const comingSoonSection = document.querySelector('.coming-soon');
const cunnectSection = document.querySelector('.cunnect');

let profileScrollTop = window.pageYOffset + profile.getBoundingClientRect().top;
let aboutSectionScrollTop =
  window.pageYOffset + aboutSection.getBoundingClientRect().top;
let skillSectionScrollTop =
  window.pageYOffset + skillSection.getBoundingClientRect().top;
let mainProjectSectionScrollTop =
  window.pageYOffset + mainProjectSection.getBoundingClientRect().top;
let subProjectSectionScrollTop =
  window.pageYOffset + subProjectSection.getBoundingClientRect().top;
let comingSoonSectionScrollTop =
  window.pageYOffset + comingSoonSection.getBoundingClientRect().top;
let cunnectSectionScrollTop =
  window.pageYOffset + cunnectSection.getBoundingClientRect().top;

const goorm = document.querySelector('.goorm');
const oi = document.querySelector('.oi');
const zara = document.querySelector('.zara');
const carrot = document.querySelector('.carrot');
const responsive = document.querySelector('.responsive');
const mini = document.querySelector('.mini');
const comingSoon = document.querySelector('.coming-soon');
const cunnect = document.querySelector('.cunnect');

const title = document.querySelector('.project-title span');

const goormTitle = document.querySelector('.goorm .desc-title');
const oiTitle = document.querySelector('.oi .desc-title');
const zaraTitle = document.querySelector('.zara .desc-title');
const carrotTitle = document.querySelector('.carrot .desc-title');
const responsiveTitle = document.querySelector('.responsive .title');
const miniTitle = document.querySelector('.mini .title');
const comingSoonTitle = document.querySelector('.coming-soon .title');

function createProjectTitle(userTop) {
  let goormScrollTop = window.pageYOffset + goorm.getBoundingClientRect().top;
  let oiScrollTop = window.pageYOffset + oi.getBoundingClientRect().top;
  let zaraScrollTop = window.pageYOffset + zara.getBoundingClientRect().top;
  let carrotScrollTop = window.pageYOffset + carrot.getBoundingClientRect().top;
  let responsiveScrollTop =
    window.pageYOffset + responsive.getBoundingClientRect().top;
  let miniScrollTop = window.pageYOffset + mini.getBoundingClientRect().top;
  let comingSoonScrollTop =
    window.pageYOffset + comingSoon.getBoundingClientRect().top;
  let cunnectScrollTop =
    window.pageYOffset + cunnect.getBoundingClientRect().top;

  if (userTop > goormScrollTop && userTop < oiScrollTop) {
    title.innerHTML = goormTitle.innerHTML;
  } else if (userTop > oiScrollTop && userTop < zaraScrollTop) {
    title.innerHTML = oiTitle.innerHTML;
  } else if (userTop > zaraScrollTop && userTop < carrotScrollTop) {
    title.innerHTML = zaraTitle.innerHTML;
  } else if (userTop > carrotScrollTop && userTop < responsiveScrollTop) {
    title.innerHTML = carrotTitle.innerHTML;
  } else if (userTop > responsiveScrollTop && userTop < miniScrollTop) {
    title.innerHTML = responsiveTitle.innerHTML;
  } else if (userTop > miniScrollTop && userTop < comingSoonScrollTop) {
    title.innerHTML = miniTitle.innerHTML;
  } else if (userTop > comingSoonScrollTop && userTop < cunnectScrollTop) {
    title.innerHTML = comingSoonTitle.innerHTML;
  } else if (userTop > cunnectScrollTop) {
    title.innerHTML = '';
  }
}

const ON_COLOR = '#0061a8';
const OFF_COLOR = '#999';

function onNavTextColor(userTop) {
  if (userTop < aboutSectionScrollTop) {
    navAbout.style.color = OFF_COLOR;
  } else if (
    userTop > aboutSectionScrollTop &&
    userTop < skillSectionScrollTop
  ) {
    navAbout.style.color = ON_COLOR;
    navSkill.style.color = OFF_COLOR;
  } else if (
    userTop > skillSectionScrollTop &&
    userTop < mainProjectSectionScrollTop
  ) {
    navAbout.style.color = OFF_COLOR;
    navSkill.style.color = ON_COLOR;
    navMain.style.color = OFF_COLOR;
  } else if (
    userTop > mainProjectSectionScrollTop &&
    userTop < subProjectSectionScrollTop
  ) {
    navSkill.style.color = OFF_COLOR;
    navMain.style.color = ON_COLOR;
    navSub.style.color = OFF_COLOR;
  } else if (
    userTop > subProjectSectionScrollTop &&
    userTop < comingSoonSectionScrollTop
  ) {
    navMain.style.color = OFF_COLOR;
    navSub.style.color = ON_COLOR;
    navComingSoon.style.color = OFF_COLOR;
  } else if (
    userTop > comingSoonSectionScrollTop &&
    userTop < cunnectSectionScrollTop
  ) {
    navSub.style.color = OFF_COLOR;
    navComingSoon.style.color = ON_COLOR;
    navCunnect.style.color = OFF_COLOR;
  } else if (userTop > cunnectSectionScrollTop) {
    navComingSoon.style.color = OFF_COLOR;
    navCunnect.style.color = ON_COLOR;
  }
}
let progressbar = document.querySelectorAll('.progressbar');
let progressNum = document.querySelectorAll('.progress span');

function onProgressbaraa(i, num, till) {
  num <= till &&
    ((progressbar[i].style.width = num + '%'),
    (progressNum[i].innerHTML = num + '%'),
    (progressNum[i].style.left = num + '%'));
}
let num = 0;
function onProgressbar() {
  for (let i = 0; i < 7; i++) {
    if (i == 0 || i == 1) {
      till = 90;

      onProgressbaraa(i, num, till);
    } else if (i == 2 || i == 3) {
      till = 80;
      onProgressbaraa(i, num, till);
    } else if (i == 4 || i == 5) {
      till = 70;
      onProgressbaraa(i, num, till);
    } else {
      till = 60;
      onProgressbaraa(i, num, till);
    }
  }
  num = num + 1;
}

window.addEventListener('scroll', (e) => {
  let userTop = window.scrollY;
  let userScrollH = e.target.defaultView.pageYOffset;
  createProjectTitle(userTop);
  onNavTextColor(userTop);

  userScrollH >= skillSectionScrollTop + 500 && onProgressbar();
});

nav.addEventListener('click', (e) => {
  const menu = e.target.className;
  const menuIcon = e.target.offsetParent.className;

  if (menu === 'logo') {
    profile.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  switch (menu || menuIcon) {
    case 'nav-about':
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 'nav-skill':
      skillSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 'nav-main-project':
      mainProjectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 'nav-sub-project':
      subProjectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 'nav-coming-soon':
      comingSoonSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    case 'nav-cunnect':
      cunnectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
  }
});
