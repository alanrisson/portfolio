let show = true
const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')
const container = document.querySelector('.container')

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    container.style.position = show ? 'inherit' : 'fixed'
    menuSection.classList.toggle("on", show)
    show = !show

})

const scrollListener = () => {

    if(window.scrollY > 10){
        container.classList.add('roll')
    } else{
        container.classList.remove('roll')
    }
    
}

window.addEventListener('scroll', scrollListener)

