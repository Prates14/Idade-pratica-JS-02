function analisar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasceu = document.getElementById('txtano')
    var result = document.getElementById('result')

    if(nasceu.value.length == 0 || Number(nasceu.value) > ano) {
        window.alert("[ERRO] valor inválido!")
    } else {
        var idade = ano - Number(nasceu.value)
        let sexo = document.getElementsByName('genero')
        var tipo = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if(sexo[0].checked) {
            tipo = 'Homem'
            if(idade >= 0 && idade <= 14) {
                tipo = 'Menino'
                imagem.setAttribute('src', '/ex02/img/menino.jpg')
            } else if(idade <= 25) {
                tipo = 'Homem adolescente'
                imagem.setAttribute('src', '/ex02/img/garoto.jpg')
            } else if(idade <= 50) {
                tipo = 'Homem adulto'
                imagem.setAttribute('src', '/ex02/img/adulto.jpg')
            } else {
                tipo = 'Idoso'
                imagem.setAttribute('src', '/ex02/img/idoso.jpg')
            }

        } else if(sexo[1].checked) {
            tipo = 'Mulher'
            if(idade >= 0 && idade <= 14) {
                tipo = 'Menina'
                imagem.setAttribute('src', '/ex02/img/menina.jpg')
            } else if(idade <= 25) {
                tipo = 'Mulher adolescente'
                imagem.setAttribute('src', '/ex02/img/garota.jpg')
            } else if(idade <= 50) {
                tipo = 'Mulher adulta'
                imagem.setAttribute('src', '/ex02/img/adulta.jpg')
            } else {
                tipo = 'Idosa'
                imagem.setAttribute('src', '/ex02/img/idosa.jpg')
            }
        }


        result.innerHTML = `Pessoa confirmada: ${tipo} de ${idade} anos`
        result.appendChild(imagem)
        result.style.textAlign = 'center'
    }

    
}
