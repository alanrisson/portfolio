const contact = document.querySelector('.contact')
const about = document.querySelector('.aboutMe')
const footer = document.querySelector('.footer')

let showContact = true
let showAbout = true

const clickMenu = (link) => {

    switch (link){

        case 'contact':

            contact.style.display = showContact ? 'flex' : 'none'
            showContact = !showContact
        break;

        case 'about':

            showContact = true
            contact.style.display = 'none'
            footer.style.display = showAbout? 'none' : 'flex'
            container.style.display = showAbout? 'none' : 'flex'
            document.body.style.overflow = showAbout? 'hidden' : 'initial'
            about.style.display = showAbout? 'flex' : 'none'
            showAbout = !showAbout

        break;

        case 'home':

            contact.style.display = 'none'
            showContact = true
            document.body.style.overflow = 'initial'
            appear.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, ratione veritatis! Rem autem minus tenetur a accusamus dolores, non, facere reprehenderit vel vero porro illum placeat animi libero voluptas veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, qui! Officiis, odio quaerat cum, pariatur facere est repudiandae exercitationem, laudantium porro nihil laboriosam! Quisquam fuga enim, eius earum qui laudantium?</p>`

        break;

    }


}