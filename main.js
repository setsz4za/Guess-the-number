let randomNumber = Math.floor(Math.random() * 100) 
let tentativas = 0
console.log(randomNumber)

function checkGuess(){
    let guess = document.getElementById('guess').value
    let message = document.getElementById('message')
    tentativas++
    if (randomNumber == guess){
        message.innerHTML = 'Acertou, conseguiu em ' + tentativas + ' tentativas'
    }
    else if(randomNumber > guess){
        message.innerHTML = 'O número é maior'
    }
    else{
        message.innerHTML = 'O númmero é menor' 
    }
}
















































// function MudarCor() {
//     let titulo = document.getElementById('Projeto')
//     titulo.style.color = 'red'
// }





// let numberList = document.getElementById('numberList')
// let Frutas = ['maca', 'pera', 'uva', 'fruta', 'alface', 'vinagre']

// for (i = 0; i < 5; i++){
//     let listItem = document.createElement('li')
//     listItem.textContent = Frutas[i]
//     numberList.appendChild(listItem)
// document.createTextNode(Frutas[i])
// }





// for(let i = 0; i < 5; i++){
//     console.log(i + 1 + " lmao")
// }


// let colorlist = []
// for(let i = 1; i <=3; i++){
//     let usercolor = prompt( 'digite a cor' + 1 + ":")
//     colorlist.push(usercolor)
// }

// document.getElementById('listacores').innerHTML = colorlist





// let firstName = prompt('digite seu 1 nome')
// let lastName = prompt('digite seu 2 nome')
// let age = parseInt(prompt('digite sua idade'))
// const soma2 = 2
// document.getElementById( 'greeting').innerHTML = 'hello '+ firstName

// let friend = ['jao', 'gim' , 'poggers', 'silva']
// console.log(friend[0])

// let celsius = 0
// let fah = 0

// celsius = parseFloat(prompt( 'digite a temp em celsius'))

// fah = celsius * 1.8 + 32

// alert(fah.toFixed(2))

// let nota = prompt('insira a nota')
// if (nota >= 90)
//     alert('A')
// else if (nota >= 80)
//     alert("B")
// else if (nota >= 70)
//     alert("C")
// else if (nota >= 60)
//     alert("D")
// else
// alert('f')

// let idade = prompt('insira e idade')
// let titulo = prompt('vc tem titulo de eleitor? s/n')

// if (idade>=18 && titulo=='s')
//     alert('vc pode votar')

// else
// alert('vc n pode votar')

// let conta = parseFloat(prompt('escreva o valor da conta'))
// let porcentagem = parseFloat (prompt('qnt de gorjeta? (%)'))

// let valorFinal = conta + ((conta*porcentagem)/100)
// alert('valor final ' + valorFinal)
    