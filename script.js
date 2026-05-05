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

    profileSection.innerHTML+=`

     <nav class="absolute inset-x-6 w-[100px] top-1/2 -translate-y-1/2">
                <ul class="flex flex-col gap-8">
                <li id="home" class="icon" title="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                </li>
                <li id="about" class="icon" title="About">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </li>
                <li id="experience" class="icon" title="Experience">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                </li>
                <li id="contact" class="icon" title="Contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </li>
                </ul>
            </nav>
    `


}
function bloquearScroll(e) {
    e.preventDefault(); // impede o scroll
}
/*
window.addEventListener("load", () => {
    HeroSection.scrollIntoView({ behavior: 'smooth', block: "start" })
})
window.addEventListener('wheel', bloquearScroll, { passive: false });*/