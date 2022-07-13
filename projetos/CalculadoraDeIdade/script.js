function verificar(){    
    var data = new Date()
    var hoje = data.getFullYear()    
    var ano = document.getElementById('ano')
    var res = document.getElementById('saida')
    if (ano.value > hoje || ano.value.length == 0){
        window.alert('Insira um ano válido')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = hoje - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Masculino'
        } else {
            genero = 'Feminino'
        }
        switch(genero){
            case 'Masculino':
                if (idade < 13){
                    img.setAttribute('src', 'imagens/menino.png')
                } else if (idade < 18){
                    img.setAttribute('src', 'imagens/garoto.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'imagens/homem.png')
                } else {
                    img.setAttribute('src', 'imagens/idoso.png')
                }          

                break
            case 'Feminino':
                if (idade < 13){
                    img.setAttribute('src', 'imagens/menina.png')
                } else if (idade < 18){
                    img.setAttribute('src', 'imagens/garota.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'imagens/mulher.png')
                } else {
                    img.setAttribute('src', 'imagens/idosa.png')      
                }
            
            break
        }
        res.innerHTML=`Genero ${genero} com ${idade} anos`
        res.appendChild(img)
    }   
}