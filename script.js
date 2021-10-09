//criando variável para inserir elementos no body

let bod = document.getElementById('main');

// Cria cada uma das 3 áreas de movimentação da torre
let box1 = boxCreator();
      box1.setAttribute('class', 'torre');
        box1.setAttribute('Id', 'torre1');
let box2 = boxCreator();
      box2.setAttribute('class', 'torre');
        box2.setAttribute('Id', 'torre2');
let box3 = boxCreator();
      box3.setAttribute('class', 'torre');
        box3.setAttribute('Id', 'torre3');

    bod.appendChild(box1);
    bod.appendChild(box2);
    bod.appendChild(box3);

let p1 = boxCreator();
      p1.setAttribute('class', 'disco');
        p1.setAttribute('Id', 'disco1');
let p2 = boxCreator();
      p2.setAttribute('class', 'disco');
        p2.setAttribute('Id', 'disco2');
let p3 = boxCreator();
      p3.setAttribute('class', 'disco');
        p3.setAttribute('Id', 'disco3');

box1.appendChild(p1);
box1.appendChild(p2);
box1.appendChild(p3);

//Seleciona cada torre
let torres = document.querySelectorAll('.torre') ;

torres.forEach(function(torre){
  torre.addEventListener('click', moveDisc);
})

const t3 = document.getElementById('torre3')
console.log(t3)
//Adiciona contador
let count = 0
let contador = boxCreator()
      contador.setAttribute('Id', 'Cont')
bod.appendChild(contador)

// Troca disco de Torre
let d1 = null
let clic = true
function moveDisc(evt){
  const torre = evt.currentTarget
  console.log(evt) 
  
  if(clic && torre.lastChild !== null){
    const disc = torre.lastChild
    console.log(torre.clientWidth)
    console.log(count)
    d1 = disc
    clic = false
  }else if(clic === false){
            if(torre.lastElementChild === null || d1.clientWidth <= torre.lastChild.clientWidth){
              count = count + 1
              torre.appendChild(d1)
              contador.innerText = count
            }
        clic = true
   } 
   if(t3.childNodes.length === 3){
     win()
   }
}
 


//Função venceu
function win() {
  const winner = boxCreator()
          winner.setAttribute('class','winner')
  winner.innerText = 'Parabéns, você venceu!'
  bod.appendChild(winner)
}

// Função para criar divs dinamicamente

function boxCreator(){
  let  box = document.createElement('div');
  return box
}