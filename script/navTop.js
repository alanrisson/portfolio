const contact = document.querySelector('.contact')
const about = document.querySelector('.aboutMe')
let showContact = true
let showAbout = true

const clickMenu = (link) => {

    switch (link){

        case 'contact':

            contact.style.display = showContact ? 'flex' : 'none'
            showContact = !showContact
        break;

        case 'about':

            contact.style.display = 'none'
            showContact = true
            
            document.body.style.overflow = showAbout? 'hidden' : 'initial'
            about.style.display = showAbout? 'flex' : 'none'
            showAbout = !showAbout
            if(showAbout) {
                container.classList.remove('roll')
            } else {
                container.classList.add('roll')
            }

        break;

        case 'home':

            contact.style.display = 'none'
            showContact = true
            about.style.display = 'none'
            showAbout = true
            if (window.scrollY < 10) {
                container.classList.remove('roll')
            }
            document.body.style.overflow = 'initial'

        break;

    }


}