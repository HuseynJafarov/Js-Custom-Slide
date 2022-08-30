let rightIcon = document.querySelector("#list-carousel .icons .right i")
let leftIcon = document.querySelector("#list-carousel .icons .left i")

rightIcon.addEventListener("click",function(){
    let activeImg = document.querySelector("#list-carousel .cards .active")

    if(activeImg.nextElementSibling != null){
        activeImg.classList.remove("active")
        activeImg.nextElementSibling.classList.add("active")
    }else{
        activeImg.classList.remove("active")
        activeImg.parentNode.firstElementChild.classList.add("active")
    }
})

leftIcon.addEventListener("click",function(){
    let activeImg = document.querySelector("#list-carousel .cards .active")

    if(activeImg.previoustElementSibling != null){
        activeImg.classList.remove("active")
        activeImg.previousElementSibling.classList.add("active")
    }else{
        activeImg.classList.remove("active")
        activeImg.parentNode.lastElementChild.classList.add("active")
    }
})
