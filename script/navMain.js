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
            
            grid.style.display = 'grid'
            grid.style.background = 'transparent'

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

                cardTop.style.backgroundImage = `url('imagens/projetos/${project}.jpeg')`
                cardTop.style.backgroundSize = 'contain'
                cardTop.style.backgroundRepeat = "no-repeat"
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
            
            grid.style.display = 'inline-block'

           grid.innerHTML = `

                <h2>Proatividade</h2>

                <h2>Raciocínio lógico</h2>

                <h2>Adaptabilidade</h2>

                <h2>Liderança</h2>

                <h2>Organização</h2>

                <h2>Facilidade em aprender</h2>

                <h2>Trabalho em equipe</h2>

                <h2>Honestidade</h2>
                
           `

        break;
        case 'cursos':
            
           grid.style.display = 'inline-block'
           
           grid.innerHTML = `
            
                <h2>Excel Avançado (32h)</h2>
            
                <h2>Inglês (800h)</h2>
            
                <h2>Lógica de Programação (40h)</h2>
            
                <h2>Javascript (40h)</h2>
            
                <h2>HTML5 / CSS3 (120h)</h2>
            
                <h2>Matemática comercial e financeira (36h)</h2>
            
                <h2>Mont. e Manut. de computadores (32h)</h2>
            
                <h2>Linguagem e comunicação (36h)</h2>
            
                <h2>Empreendedorismo (20h)</h2>
            
                <h2>Informática (40h)</h2>
            
                <h2>Formação Humana e Científica (48h)</h2>
            
                <h2>Cidadania e trabalho (32h)</h2>
            
                <h2>Cooperativismo (40h)</h2>
            `

        break;
        case 'conhecimentos':
            
            grid.style.display = 'grid'
            grid.style.background = 'transparent'

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

            cardTop.style.backgroundImage = `url('imagens/conhecimentos/${knowns}.png')`
            cardTop.style.backgroundSize = 'contain'
            cardTop.style.backgroundRepeat = 'no-repeat'
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