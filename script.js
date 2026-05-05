const profileSection = document.getElementById("profile")
const HeroSection = document.getElementById("hero")
const btnProfile = [...document.getElementsByClassName("profilebtn")]

btnProfile.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerHTML === "ggary") {
            ScrollToProfile(0)

        } else {


            ScrollToProfile(1)

        }

    })
})
async function getData() {
    const request = await fetch('http://127.0.0.1:5500/rush/data.json')
    const data = request.json()
    return data
}
function ScrollToProfile(index) {
    GetProfileData(index)
    profileSection.scrollIntoView({ behavior: 'smooth', block: "start" })




}
async function GetProfileData(userIndex = 0) {





    let userData = await getData()
    userData = userData[userIndex]

    const divExperiencesSkills = document.createElement("div")
    const divexperiences = document.createElement("div")
    const divexperiencesContainer = document.createElement("div")

    /*
    User Experiences Configuration
    */
    const experiencesUserArray = [...userData.userExperience]
    divexperiences.setAttribute("class", "experiences")
    divExperiencesSkills.setAttribute("class", "experiences-skills")
    divexperiencesContainer.setAttribute("class", "container")
    experiencesUserArray.forEach((element, index) => {
        divexperiencesContainer.innerHTML += `
            <div class="cardDetails">
                            <h1 class="title">${element.title}</h1>
                            <p class="description">
                                ${element.description}
                            </p>
                            <div class="tools">
                            ${element.tools.map(tool => `<span class="tool">${tool}</span>`).join("")}
                                
                            </div>
                        </div>
        
        `
        console.log(element);




    })




    profileSection.innerHTML = `
    <div class="about">
        <div class="description">
            <h1>${userData.userAbout.userName}</h1>
            <h3>${userData.userAbout.userJob}</h3>
            <span>${userData.userAbout.userEmail}</span>
            <p>${userData.userAbout.userDescription}</p>
        </div>
        <div class="img">
            <img src="${userData.userAbout.userImg}"
                alt="Imagem do Usuario ${userData.userAbout.userName}">
        </div>
    </div>

    
  
        
    
    `;
  
    


    divexperiences.appendChild(divexperiencesContainer)
    divExperiencesSkills.appendChild(divexperiences)
    /// skills components3

    

    console.log(userData);

    profileSection.appendChild(divExperiencesSkills)


}
function bloquearScroll(e) {
    e.preventDefault(); // impede o scroll
}
/*
window.addEventListener("load", () => {
    HeroSection.scrollIntoView({ behavior: 'smooth', block: "start" })
})
window.addEventListener('wheel', bloquearScroll, { passive: false });*/