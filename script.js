function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if( formAno.value.length == 0 || formAno.value > ano  ){
        window.alert('[ERRO] Verifique os dados e tente novamente')

    }else{
        var formSexo = document.getElementsByName( 'sexo' )
        var idade = ano - Number( formAno.value )
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if ( formSexo[0].checked ){
            genero = 'Homem'
            if ( idade >= 0 && idade < 12 ){
                //Criança
                img.setAttribute('src', 'bebe-masculino.jpg')

            }else if ( idade < 21 ){
                //Jovem
                img.setAttribute('src', 'jovem-masculino.png')

            } else if ( idade < 50 ){
                // Adulto
                img.setAttribute('src', 'homem.jpg')

            }else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }


        } else if ( formSexo[1].checked ){
            genero = 'Mulher'
            if ( idade >=0 && idade < 12  ){
                //Criança
                img.setAttribute('src', 'bebe-feminino.jpg')

            }else if ( idade < 21 ){
                //Jovem
                img.setAttribute('src', 'jovem-feminino.jpg')

            }else if ( idade < 50 ){
                //Adulto
                img.setAttribute('src', 'mulher.jpg')

            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')

            }


        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        resultado.appendChild(img)

    }   

}