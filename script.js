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
    console.log(userData);

    // profileSection.textContent = 
}
function bloquearScroll(e) {
    e.preventDefault(); // impede o scroll
}
/*
window.addEventListener("load", () => {
    HeroSection.scrollIntoView({ behavior: 'smooth', block: "start" })
})
window.addEventListener('wheel', bloquearScroll, { passive: false });*/