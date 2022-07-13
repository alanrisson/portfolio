const grid = document.querySelector('.grid')
const player = document.querySelector('.nome')

player.innerHTML = localStorage.getItem('player')

const characters = [
    'jim',
    'max',
    'dustin',
    'eddie',
    'joyce',
    'will',
    'eleven',
    'lucas',
    'nancy',
    'mike'
]

const checkEndGame = () => {

    const revealedCards = document.querySelectorAll('.card-revealed')

    if(revealedCards.length === 20){
        alert('PARABÉNS')
        window.location = '../index.html'
    }

}

const checkCards = () => {

    const firstcharacter = firstCard.getAttribute('data-character')
    const secondcharacter = secondCard.getAttribute('data-character')

    if (firstcharacter === secondcharacter){

        firstCard.firstChild.classList.add('card-revealed')
        secondCard.firstChild.classList.add('card-revealed')

        firstCard = ''
        secondCard= ''

        checkEndGame()

    } else {

        setTimeout(()=>{

            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard= ''

        }, 500)
        
    }

    
}

let firstCard = ''
let secondCard = ''

const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards()
    }

}

const createElement = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;

    return element;
}

const createCard = (character) => {

    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.background = `url('../imagens/${character}.jpeg')`;
    front.style.backgroundSize = 'cover'

    card.appendChild(front);
    card.appendChild(back);
    card.setAttribute('data-character', character)

    card.addEventListener('click', revealCard)

    return card;
}

const loadGame = () =>{

    const duplicaCharacters = [...characters, ...characters]
    const shuffledArray = duplicaCharacters.sort(() => Math.random() - 0.5)

    shuffledArray.forEach((character) =>{
        
        const card = createCard(character)
        grid.appendChild(card)

    });

}

loadGame()
