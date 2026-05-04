const profileSection = document.getElementById("profile")
const btnProfile = [...document.getElementsByClassName("profilebtn")]

btnProfile.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerHTML === "ggary") {
            ScrollToProfile(1)
        } else {
            ScrollToProfile(0)

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
