const footerAdd = document.createElement("footer");
document.body.append(footerAdd);


let today = new Date();


let thisYear = new Date(). getFullYear();


let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = "Jose Prieto"+" "+ thisYear;
footer.appendChild(copyright);

let skills = ["PHP", "C#", "Linux", "Java", "Javascript", "SQL"];
let skillsSection = document.querySelector("#Skills");

let skillsList = skillsSection.querySelector('ul');


for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};

let messageForm = document.querySelector(`[name="leave_message"]`);
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let firstInput = event.target.usersName.value;
    let secondInput = event.target.usersEmail.value;
    let thirdInput = event.target.usersMessage.value;
    console.log(firstInput);
    console.log(secondInput);
    console.log(thirdInput);

    let messageSection = document.querySelector("#messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement('li');
    newMessage.innerHTML =`<a href="mailto:${secondInput}"> ${firstInput} </a><span>${thirdInput}</span>`; 
    let removeButton = document.createElement('button');
    removeButton.innerHTML = "remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", function(event) {
        let entry = event.target.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});