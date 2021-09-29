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
  torre.addEventListener('click', pieceChoice);
})

function pieceChoice(evt){
 console.log(evt.currentTarget);
}

//Seleciona cada disco pela id
const discos = document.querySelectorAll('.disco');

discos.forEach(function(disco){
  disco.addEventListener('click', pieceChoice);
});

// Função para criar divs dinamicamente

function boxCreator(){
  let  box = document.createElement('div');
  return box
}