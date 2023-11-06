const nome = "Vanessa"
const mensagem1 = "O herói de nome " + nome
const pontuacao = " está no nível de "
let xp = 2000

    if(xp <= 1000 ){
        console.log( mensagem1 + pontuacao + "Ferro")
        }else if(xp >=1001 && xp <= 2000 ){
            console.log( mensagem1 + pontuacao + "Bronze")
        }else if( xp >= 2001 && xp <= 5000 ){
            console.log( mensagem1 + pontuacao + "Prata")
        }else if( xp >= 5001 && xp <= 7000 ){
            console.log( mensagem1 + pontuacao + "Ouro") 
        }else if( xp >= 7001 && xp <= 8000 ){
            console.log( mensagem1 + pontuacao + "Platina")
        }else if( xp >= 8001 && xp <= 9000 ){
            console.log( mensagem1 + pontuacao + "Ascendente")
        }else if( xp >= 9001 && xp<= 10000 ){
            console.log( mensagem1 + pontuacao + "Imortal")
        }else if( xp >= 10001 ){
            console.log( mensagem1 + pontuacao + "Radiante")
        }