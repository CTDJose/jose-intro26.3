const footerAdd = document.createElement("footer");
document.body.append(footerAdd);
console.log("footer is connected!");

let today = new Date();
console.log(today);

let thisYear = new Date(). getFullYear();
console.log(thisYear);

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = "Jose Prieto"+" "+ thisYear;
footer.appendChild(copyright);

let skills = ["PHP", "C#", "Linux", "Java", "Javascript", "SQL"];
let skillsSection = document.querySelector("#Skills");
//console.log(skillsSection);
let skillsList = skillsSection.querySelector('ul');
//console.log(skillsList);

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};