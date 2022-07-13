const grid = document.querySelector('.grid')

const createGridElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

const showSection = (link) => {
    grid.innerHTML = ''

    switch (link) {

        case 'projetos':
            
            const projects = [
                "jogoDaMemoria",
                "jogoMario",
                "formulario",
                "projetoCordel",
                "urna",
                "CalculadoraDeIdade"
            ]

            const createProject = (project) => {

                const card = createGridElement('div', 'card')
                const cardTop = createGridElement('div', 'cardTop')
                const cardBottom = createGridElement('div', 'cardBottom')             

                cardTop.style.backgroundImage = `url('../imagens/projetos/${project}.jpeg')`
                cardTop.style.backgroundSize = 'cover'
                cardTop.style.backgroundPosition = 'center'
                cardBottom.innerHTML = `<a href="https://alanrisson.github.io/${project}/" target="_blank" rel="next">${project}</a>`
                cardBottom.style.cursor = 'pointer'

                card.appendChild(cardTop)
                card.appendChild(cardBottom)

                return card

            }

           const loadProjects = () => {

                projects.forEach((project) => {
                    const card = createProject(project)
                    grid.appendChild(card)
                })

           }

           loadProjects()

        break;
        case 'skills':
            


        break;
        case 'cursos':
            
        break;
        case 'conhecimentos':
            
           const knowledge = [
                "HTML5",
                "CSS3",
                "JavaScript",
                "Logica",
                "MetodologiasAgeis",
                "LevantamentoDeRequisitos",
                "Scrum",
                "engSoftware",
                "git",
                "github"

           ]

           const createKnowledge = (knowns) => {

            const card = createGridElement('div', 'card')
            const cardTop = createGridElement('div', 'cardTop')
            const cardBottom = createGridElement('div', 'cardBottom')             

            cardTop.style.backgroundImage = `url('../imagens/conhecimentos/${knowns}.png')`
            cardTop.style.backgroundSize = '100% 100%'
            cardBottom.style.color = "white"
            cardBottom.innerHTML = knowns

            card.appendChild(cardTop)
            card.appendChild(cardBottom)

            return card

        }

           const loadKnowledges = () => {

            knowledge.forEach((knowns) => {
                const card = createKnowledge(knowns)
                grid.appendChild(card)
            })

       }

       loadKnowledges()

        break;
        case 'faculdade':
            
        break;
    }
}