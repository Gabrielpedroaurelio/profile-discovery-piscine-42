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
    divExperiencesSkills.setAttribute("id", "experiences")


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
    <div class="about" id="about">
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
    console.log(userData.userContact);
    
    profileSection.innerHTML += `
     <section id="contacts" class="bg-black flex justify-center items-center flex-col gap-10">

            <div class="flex flex-col justify-center items-center gap-6">
                <p class="rainbow inline-block text-sm tracking-wider uppercase">// contact</p>
                
                <h2 class="text-3xl font-bold tracking-tight">Let's Build Something</h2>

                <p class="gray">Have a project in mind? I'm always open to discussing new opportunities.</p>
            </div>

            <div class="card flex flex-col justify-center items-center rounded-xl text-sm">
                <div class="flex flex-col gap-4">
                    <div>
                        <a href="mailto:${userData.userAbout.userEmail}" class="group flex items-center gap-2 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-5" aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            </svg>
                            ${userData.userAbout.userEmail}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right size-4 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="flex justify-center gap-4">
                        <div class="link">
                            <a href="${userData.userAbout.github}" target="_blank" class="flex gap-1 shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                                <svg viewBox="0 0 24 24" fill="currentColor" class="mr-2 size-4">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"></path>
                                </svg>
                                GitHub
                            </a>
                        </div>
                        <div class="link">
                            <a href="${userData.userAbout.linkedin}" target="_blank" class=" gap-1 group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                                <svg class="size-4 lucide lucide-linkedin-icon lucide-linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>set
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
`
    profileSection.innerHTML += `

     <nav class="fixed inset-x-6 w-[100px] top-1/2 -translate-y-1/2 z-0">
                <ul class="flex flex-col gap-8">
                <li class="icon" title="Home"  onclick="document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); setTimeout(()=>{location.reload()},100)" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                </li>
                <li  class="icon" title="About"  onclick="document.getElementById('about').scrollIntoView({ behavior: 'smooth' })">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </li>
                <li class="icon" title="Experience"  onclick="document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' })">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                </li>
                <li class="icon" title="Contact"  onclick="document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })">
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