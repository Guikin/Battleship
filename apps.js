const ship =$(".ship");
const playergrid=$(".playergrid");


let shipSelect="";
let playerGrids=[]
let rotation=true;

const generategrid= num =>{
    for(let i=0;i<num;i++){
    let grid=document.createElement("div")
    grid.classList.add("square")
    grid.classList.add(`${i}`)
    playergrid.append(grid)
    }
}
generategrid(36);



ship.on("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
    shipSelect=event.target.classList[2]
  });

  const squares=$(".playergrid .square");

document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  });

  
    
const resetgrid = function(){
    for(let i=0 ; i<36; i++){
        squares[i].classList.remove("highlight");;
    }
  } 

// playergrid.on("dragleave", function(event) {
//     // reset background of potential drop target when the draggable element leaves it
    
//      let selectCube=event.target;
//     cubeNum = parseInt(selectCube.classList[1])

//     if (event.target.parentElement.className =="playergrid") {

//         if(shipSelect ==="Commander-Ship"){
//             if(rotation=== true){
//                 nextcube1=cubeNum+6;
//                     nextcube2=cubeNum+12;
//                     previouscube1=cubeNum-6;
//                     previouscube2=cubeNum-12;
//                     squares[nextcube2].classList.remove("highlight")
//                     squares[previouscube2].classList.remove("highlight")
//             }
//         }
//     }
//   })
  
  playergrid.on("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters itconst 
    resetgrid()
    let selectCube=event.target;
    let cubeNum = parseInt(selectCube.classList[1])
    if (selectCube.parentElement.className == "playergrid") {
      if(shipSelect==="Commander-Ship"){
          if(rotation=== true){
            let nextcube1=cubeNum+6;
            let nextcube2=cubeNum+12
            let previouscube1=cubeNum-6
            let previouscube2=cubeNum-12
            if((cubeNum !== undefined && squares[nextcube1] !== undefined && squares[nextcube2] !== undefined && squares[previouscube1] !== undefined && squares[previouscube2] !== undefined)){
              selectCube.classList.add("highlight")
              squares[nextcube1].classList.add("highlight")
              squares[nextcube2].classList.add("highlight")
              squares[previouscube1].classList.add("highlight")
              squares[previouscube2].classList.add("highlight")
            }

            //  if(squares[previouscube2].classList[2]!=="highlight" || squares[nextcube2].classList[2]!=="highlight"){
            //     squares[nextcube1].classList.add("highlight")
            //     squares[previouscube1].classList.add("highlight")
            //  }
            }
        }
    }})


  playergrid.on("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    let selectCube=event.target;
    let cubeNum=parseInt(selectCube.classList[1])
    let nextcube1=cubeNum+6;
    let nextcube2=cubeNum+12
    let previouscube1=cubeNum-6
    let previouscube2=cubeNum-12
    // move dragged elem to the selected drop target
    if((cubeNum !== undefined && squares[nextcube1] !== undefined && squares[nextcube2] !== undefined && squares[previouscube1] !== undefined && squares[previouscube2] !==undefined)){
    if (event.target.parentElement.className == "playergrid"){
      selectCube.style.backgroundColor = "blue";
      squares[nextcube1].style.backgroundColor = "blue";
      squares[nextcube2].style.backgroundColor = "blue";
      squares[previouscube1].style.backgroundColor = "blue";
      squares[previouscube2].style.backgroundColor = "blue";

    //   dragged.parentNode.removeChild(dragged);
    //   event.target.appendChild(dragged);
    
    }
    console.log(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2)}
  });

 

