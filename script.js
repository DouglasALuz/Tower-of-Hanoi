//criando variável para inserir elementos no body

let bod = document.getElementById('main')


// Cria cada uma das 3 áreas de movimentação da torre
let box1 = boxCreator()
box1.setAttribute('class', 'torre')
let box2 = boxCreator()
box2.setAttribute('class', 'torre')
let box3 = boxCreator()
box3.setAttribute('class', 'torre')


    bod.appendChild(box1)
    bod.appendChild(box2)
    bod.appendChild(box3)

let p1 = boxCreator()
p1.setAttribute('class', 'peça1')
p1.setAttribute('Id', '1')
let p2 = boxCreator()
p2.setAttribute('class', 'peça2')
p2.setAttribute('Id', '2')
let p3 = boxCreator()
p3.setAttribute('class', 'peça3')
p3.setAttribute('Id', '3')
let p4 = boxCreator()
p4.setAttribute('class', 'peça4')
p4.setAttribute('Id', '4')
let p5 = boxCreator()
p5.setAttribute('class', 'peça5')
p5.setAttribute('Id', '5')

box1.appendChild(p1)
box1.appendChild(p2)
box1.appendChild(p3)
box1.appendChild(p4)
box1.appendChild(p5)

// Função para mover peça
let torre = document.querySelector('.torre') //!!!!! Tive problema para selecionar as peças nos outros boxes

torre.addEventListener('click', pieceChoice)

function pieceChoice(evt){
  console.log(evt.currentTarget)

}

let disco1 = document.getElementById('1')
let disco2 = document.getElementById('2')
let disco3 = document.getElementById('3')
let disco4 = document.getElementById('4')
let disco5 = document.getElementById('5')

disco1.addEventListener('click', pieceChoice)
disco2.addEventListener('click', pieceChoice)
disco3.addEventListener('click', pieceChoice)
disco4.addEventListener('click', pieceChoice)
disco5.addEventListener('click', pieceChoice)

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