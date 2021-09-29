//criando variável para inserir elementos no body

let bod = document.getElementById('main')


// Cria cada uma das 3 áreas de movimentação da torre
let box1 = boxCreator()
      box1.setAttribute('class', 'torre1')
        box1.setAttribute('Id', 'base')
let box2 = boxCreator()
      box2.setAttribute('class', 'torre2')
        box2.setAttribute('Id', 'base')
let box3 = boxCreator()
      box3.setAttribute('class', 'torre3')
        box3.setAttribute('Id', 'base')


    bod.appendChild(box1)
    bod.appendChild(box2)
    bod.appendChild(box3)

let p1 = boxCreator()
      p1.setAttribute('class', 'peça1')
        p1.setAttribute('Id', 'disc')
let p2 = boxCreator()
      p2.setAttribute('class', 'peça2')
        p2.setAttribute('Id', 'disc')
let p3 = boxCreator()
      p3.setAttribute('class', 'peça3')
        p3.setAttribute('Id', 'disc')
let p4 = boxCreator()
      p4.setAttribute('class', 'peça4')
        p4.setAttribute('Id', 'disc')
let p5 = boxCreator()
      p5.setAttribute('class', 'peça5')
        p5.setAttribute('Id', 'disc')

box1.appendChild(p1)
box1.appendChild(p2)
box1.appendChild(p3)
box1.appendChild(p4)
box1.appendChild(p5)

//Seleciona cada torre
let torres = document.querySelectorAll('#base') 

torres.forEach(function(torre){
  torre.addEventListener('click', pieceChoice)
})

function pieceChoice(evt){
  console.log(evt.currentTarget)

}

//Seleciona cada disco pela id
const discos = document.querySelectorAll('#disc')

discos.forEach(function(disco){
  disco.addEventListener('click', pieceChoice)  
})


// Função para criar as peças
// let N = 3 // defini inicialmente 3 peças, mas a ideia é gerar "N" peças
// function pieceCreator(N){

// for(let i=0; i<=N; i++){
//   let p = boxCreator()
// }





// Função para criar divs dinamicamente

function boxCreator(){
  let  box = document.createElement('div')
  return box
}