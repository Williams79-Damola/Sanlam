let li = document.querySelectorAll("li")
let hamburger = document.querySelector(".hamburger");
let link = document.querySelector(".link")
hamburger.addEventListener("click", ()=>{
    if(link.classList.contains("show")){
    link.classList.remove("show")
    }else{
        link.classList.add("show")
    }
})

li.forEach((unodered)=>{
    unodered.addEventListener("click", ()=>{
        link.classList.remove("show")
    })
})