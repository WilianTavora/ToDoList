
const btnCreat = document.querySelector(".btncreat")
const addBtn = document.querySelector(".add-btn")
const addBtn2 = document.querySelector(".add-btn2")

const list = document.querySelectorAll(".shadow-box")

         // ALL ITENS BOX
const allBox = document.querySelector(".all-box")
const studyBox = document.querySelector(".study-box")
const buyBox = document.querySelector(".buy-box")
const travelBox = document.querySelector(".travel-box")
const homeBox = document.querySelector(".home-box")
const workBox = document.querySelector(".work-box")

                // ALL CONTENT DO BOX
const content2AllBox = document.querySelector(".content2-all-task")
const content2Study = document.querySelector(".content2-study")
const content2buy = document.querySelector(".content2-buy")
const content2Travel = document.querySelector(".content2-travel")
const content2Home = document.querySelector(".content2-home")
const content2Work = document.querySelector(".content2-work")

const content = document.querySelector(".content")
const content2 = document.querySelector(".content2")
const content3 = document.querySelector(".content3")

const arrowLeft = document.querySelector(".arrow-left")
const arrowLeft2 = document.querySelector(".arrow-left2")

list.onclick = function(){
    list.classList.toggle("active")
}

addBtn.addEventListener("click", (e)=>{
    content.style.display = "none"
    content3.style.display = "block"
})
addBtn2.addEventListener("click", (e)=>{
    content2.style.display = "none"
    content3.style.display = "block"
})

allBox.addEventListener("click", ()=> {
    content.style.display = "none"
    content2.style.display = "block"
    content2AllBox.style.display = "block"
    content2Study.style.display = "none"
    content2buy.style.display = "none"
    content2Travel.style.display = "none"
    content2Home.style.display = "none"
    content2Work.style.display = "none"
})
studyBox.addEventListener("click", ()=> {
    content.style.display = "none"
    content2.style.display = "block"
    content2AllBox.style.display = "none"
    content2Study.style.display = "block"
    content2buy.style.display = "none"
    content2Travel.style.display = "none"
    content2Home.style.display = "none"
    content2Work.style.display = "none"
})
buyBox.addEventListener("click", ()=> {
    content.style.display = "none"
    content2.style.display = "block"
    content2AllBox.style.display = "none"
    content2Study.style.display = "none"
    content2buy.style.display = "block"
    content2Travel.style.display = "none"
    content2Home.style.display = "none"
    content2Work.style.display = "none"
})
travelBox.addEventListener("click", ()=> {
    content.style.display = "none"
    content2.style.display = "block"
    content2AllBox.style.display = "none"
    content2Study.style.display = "none"
    content2buy.style.display = "none"
    content2Travel.style.display = "block"
    content2Home.style.display = "none"
    content2Work.style.display = "none"
})
homeBox.addEventListener("click", ()=> {
    content.style.display = "none"
    content2.style.display = "block"
    content2AllBox.style.display = "none"
    content2Study.style.display = "none"
    content2buy.style.display = "none"
    content2Travel.style.display = "none"
    content2Home.style.display = "block"
    content2Work.style.display = "none"
})
workBox.addEventListener("click", ()=> {
    content.style.display = "none"
    content2.style.display = "block"
    content2AllBox.style.display = "none"
    content2Study.style.display = "none"
    content2buy.style.display = "none"
    content2Travel.style.display = "none"
    content2Home.style.display = "none"
    content2Work.style.display = "block"
})
arrowLeft.addEventListener("click", ()=> {
    content.style.display = "block"
    content2.style.display = "none"
})
arrowLeft2.addEventListener("click", ()=> {
    content.style.display = "block"
    content3.style.display = "none"
})




// arrowLeft2.addEventListener("click", (e)=>{
//     window.location.href = "/page/index.html"
// })
// allBox.addEventListener("click", (e)=>{
//     window.location.href = "/page/page2.html"
// })
// studyBox.addEventListener("click", (e)=>{
//     window.location.href = "/page/page2.html"
// })
// buyBox.addEventListener("click", (e)=>{
//     window.location.href = "/page/page2.html"
// })
// travelBox.addEventListener("click", (e)=>{
//     window.location.href = "/page/page2.html"
// })
// homeBox.addEventListener("click", (e)=>{
//     window.location.href = "/page/page2.html"
// })
// workBox.addEventListener("click", (e)=>{
//     window.location.href = "/page/page2.html"
// })



