// NAVBAR_START
const navButtonToggle = document.querySelector('.nav-toggle');
const navButtonClose = document.querySelector('.nav-close');
const navMenu = document.querySelector('.nav-menu');

navButtonToggle.addEventListener('click', () => {
    navMenu.classList.add('nav-menu-open')
})
navButtonClose.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-open')
})

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
    navMenu.classList.remove('nav-menu-open')
})


//NAVBAR_END

//SKILL_START
const skillsArrows = document.querySelectorAll('.skills-header');
const skillsContents = document.querySelectorAll('.skills-content');

skillsArrows.forEach((arrow, i) => {
    arrow.addEventListener('click', () => {
        skillsContents[i].classList.toggle('skills-open');
        skillsContents[i].classList.toggle('skills-closed');
    })
})

//SKILL_END

// CURRICULUM_START

const curriculumEducation = document.querySelector('.curriculum-education');
const curriculumExperience = document.querySelector('.curriculum-experience');
const curriculumTabButtonEdu = document.querySelector('.curriculum-button-education');
const curriculumTabButtonExp = document.querySelector('.curriculum-button-experience');

curriculumTabButtonEdu.addEventListener('click', () => {
    if (!curriculumEducation.classList.contains('curriculum-active')) {
        curriculumEducation.classList.add('curriculum-active')
        curriculumExperience.classList.remove('curriculum-active')

        curriculumTabButtonEdu.classList.add('curriculum-button-active')
        curriculumTabButtonExp.classList.remove('curriculum-button-active')
    }
})
curriculumTabButtonExp.addEventListener('click', () => {
    if (!curriculumExperience.classList.contains('curriculum-active')) {
        curriculumEducation.classList.remove('curriculum-active')
        curriculumExperience.classList.add('curriculum-active')

        curriculumTabButtonEdu.classList.remove('curriculum-button-active')
        curriculumTabButtonExp.classList.add('curriculum-button-active')
    }
})

