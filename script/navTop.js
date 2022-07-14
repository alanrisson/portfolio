const contact = document.querySelector('.contact')
let showContact = true
const clickMenu = (link) => {

    switch (link){

        case 'contact':

            contact.style.display = showContact ? 'flex' : 'none'
            showContact = !showContact
        break;

    }


}