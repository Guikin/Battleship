const ship1 =$(".ship1")
const playergrid=$(".playergrid");
const squares=$(".playergrid .square")

let ship="";




ship1.on("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
  });

document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  });



playergrid.on("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    const cubenum = parseInt(event.target.classList[1])
    const nextcube = cubenum 

    if (event.target.parentElement.className == "playergrid") {

      event.target.style.background ="";
      
      squares[nextcube].classList.remove("highlight")
    }
  },)
  
  playergrid.on("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    const cubenum = parseInt(event.target.classList[1])
    const nextcube = cubenum 

    if (event.target.parentElement.className == "playergrid") {
      event.target.style.background ="purple";
      squares[nextcube].classList.add("highlight")
      ;
}})

  playergrid.on("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    console.log(event.target.classList[1]);
    // move dragged elem to the selected drop target
    if (event.target.parentElement.className == "playergrid"){
      event.target.style.background = "blue";
    //   dragged.parentNode.removeChild(dragged);
    //   event.target.appendChild(dragged);
    }
  });

 
// function hello(){
//     dragged = event.target;
// }

