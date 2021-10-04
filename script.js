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



// Troca disco de Torre
let d1 = null
let clic = true
function moveDisc(evt){
  const torre = evt.currentTarget
   
  if(clic){
    const disc = torre.lastChild
    d1 = disc
    clic = false
  }else{
    torre.appendChild(d1)
    clic = true
   }
  
  
  
}
 
//console.log(evt.srcElement.childNodes.length)
// if(Element.classname === 'disco'){
//   //disc = document.getElementById(evt.target.id)
// }




// Função para criar divs dinamicamente

function boxCreator(){
  let  box = document.createElement('div');
  return box
}