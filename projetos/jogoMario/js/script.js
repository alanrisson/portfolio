
const pular = () => {

    const mario = document.querySelector('.mario')
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')

    }, 500)
}

const loop = setInterval(()=>{

    const clouds = document.querySelector('.clouds')
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario')
    const pipeposition = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudposition = clouds.offsetLeft;

    if(pipeposition <= 122 && pipeposition > 0 && marioposition < 80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipeposition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioposition}px`

        mario.src = 'imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudposition}px`

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', pular)
