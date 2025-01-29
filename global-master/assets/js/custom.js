const aboutContent = document.getElementById("aboutContent");
const showIntro = document.getElementById("showIntro");
const showSkills = document.getElementById("showSkills");
const showEdu = document.getElementById("showEdu");
const introduction = document.getElementById("introduction");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const mailTo = document.getElementById("mailTo");
const callMe = document.getElementById("callMe");
const reactOut = document.getElementById("reactOut")
const mailTo2 = document.getElementById("mailTo2");
import { CALLINGS, CONTACTS, REACHOUTS } from './keys.js'

console.log("Data: ", CALLINGS, CONTACTS, REACHOUTS)

mailTo.href = CONTACTS;
mailTo.textContent = CONTACTS;
mailTo2.href = CONTACTS;
callMe.href = CALLINGS;
reactOut.href = REACHOUTS;
const showings = [
     { link: showIntro, content: introduction },
     { link: showSkills, content: skills },
     { link: showEdu, content: education }
];

let isAnimating = false;

showings.forEach(({ link, content }) => {
     link.addEventListener("click", (e) => {
          e.preventDefault();

          if (isAnimating) return;

          isAnimating = true;
          aboutContent.classList.remove('slide-out');
          aboutContent.classList.add('slide-in');
          aboutContent.style.display = "block";

          [introduction, skills, education].forEach(section => {
               section.style.display = "none";
          });

          setTimeout(() => {
               content.style.display = "block";
               isAnimating = false;
          }, 100);
     });
});

document.addEventListener("click", (e) => {
     if (
          !aboutContent.contains(e.target) &&
          !showings.some(({ link }) => link.contains(e.target))
     ) {
          if (isAnimating) return;

          isAnimating = true;
          aboutContent.classList.remove('slide-in');
          aboutContent.classList.add('slide-out');

          setTimeout(() => {
               aboutContent.style.display = "none";
               [introduction, skills, education].forEach((section) => {
                    section.style.display = "none";
               });
               isAnimating = false;
          }, 100);
     }
});
