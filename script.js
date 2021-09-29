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
let p2 = boxCreator()
p2.setAttribute('class', 'peça2')
let p3 = boxCreator()
p3.setAttribute('class', 'peça3')
let p4 = boxCreator()
p4.setAttribute('class', 'peça4')
let p5 = boxCreator()
p5.setAttribute('class', 'peça5')

box1.appendChild(p1)
box1.appendChild(p2)
box1.appendChild(p3)
box1.appendChild(p4)
box1.appendChild(p5)

// Função para mover peça
let torre = document.querySelector('.torre') //!!!!! Tive problema para selecionar as peças nos outros boxes

torre.addEventListener('click', pieceChoice)

function pieceChoice(evt){
  console.log(evt.target.classname)

}

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