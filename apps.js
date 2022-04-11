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

  $(".rotate").on("click",function(){
      if(rotation){
          rotation=false;
      }else{
          rotation=true
      }
      console.log(rotation);
  })
    
const resetgrid = function(){
    for(let i=0 ; i<36; i++){
        squares[i].classList.remove("highlight");;
        squares[i].classList.remove("red");;
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
          if(rotation===true){
             nextcube1=cubeNum+6;
             nextcube2=cubeNum+12
             previouscube1=cubeNum-6
             previouscube2=cubeNum-12
             
             if((cubeNum !== undefined && squares[nextcube1] !== undefined && squares[nextcube2] !== undefined && squares[previouscube1] !== undefined && squares[previouscube2] !== undefined)){

                selectCube.classList.add("highlight")
                squares[nextcube1].classList.add("highlight")
                squares[nextcube2].classList.add("highlight")
                squares[previouscube1].classList.add("highlight")
                squares[previouscube2].classList.add("highlight")
            }else{
                selectCube.classList.add("red")
                squares[nextcube1].classList.add("red")
                squares[nextcube2].classList.add("red")
                squares[previouscube1].classList.add("red")
                squares[previouscube2].classList.add("red")
            };
        }else{
             nextcube1=cubeNum+1;
             nextcube2=cubeNum+2
             previouscube1=cubeNum-1
             previouscube2=cubeNum-2
             
             if(cubeNum!==2 && cubeNum!==3 && cubeNum!==8 && cubeNum!==9 && cubeNum!==14 && cubeNum!==15 && cubeNum!==20 && cubeNum!==21 && cubeNum!==26 && cubeNum!==27 && cubeNum!==32 && cubeNum!==33){
                selectCube.classList.add("red")
                squares[nextcube1].classList.add("red")
                squares[nextcube2].classList.remove("highlight")
                squares[previouscube1].classList.add("red")
                squares[previouscube2].classList.remove("highlight")
            }else{
                selectCube.classList.add("highlight")
                squares[nextcube1].classList.add("highlight")
                squares[nextcube2].classList.add("highlight")
                squares[previouscube1].classList.add("highlight")
                squares[previouscube2].classList.add("highlight")
                };
            }
    

            //  if(squares[previouscube2].classList[2]!=="highlight" || squares[nextcube2].classList[2]!=="highlight"){
            //     squares[nextcube1].classList.add("highlight")
            //     squares[previouscube1].classList.add("highlight")
            //  }
        }
    }})


  playergrid.on("drop", function(event){
    // prevent default action (open as link for some elements)
    event.preventDefault();
    let selectCube=event.target;
    let cubeNum=parseInt(selectCube.classList[1])
    if(event.target.parentElement.className == "playergrid"){
        if(rotation===true){
            nextcube1=cubeNum+6;
            nextcube2=cubeNum+12;
            previouscube1=cubeNum-6;
            previouscube2=cubeNum-12;

            if(cubeNum !== undefined && squares[nextcube1] !== undefined && squares[nextcube2] !== undefined && squares[previouscube1] !== undefined && squares[previouscube2] !==undefined){
             selectCube.style.backgroundColor = "blue";
             squares[nextcube1].style.backgroundColor = "blue";
             squares[nextcube2].style.backgroundColor = "blue";
             squares[previouscube1].style.backgroundColor = "blue";
             squares[previouscube2].style.backgroundColor = "blue";
             console.log(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
            }
            
        }else{
             nextcube1=cubeNum+1;
             nextcube2=cubeNum+2;
             previouscube1=cubeNum-1;
             previouscube2=cubeNum-2;
             
            if(cubeNum===2 || cubeNum===3 || cubeNum===8 || cubeNum===9 && cubeNum===14 || cubeNum===15 || cubeNum===20 || cubeNum===21 || cubeNum===26 || cubeNum===27 || cubeNum===32 || cubeNum===33)
            {
                selectCube.style.backgroundColor = "blue";
                squares[nextcube1].style.backgroundColor = "blue";
                squares[nextcube2].style.backgroundColor = "blue";
                squares[previouscube1].style.backgroundColor = "blue";
                squares[previouscube2].style.backgroundColor = "blue";
                console.log(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
            }
        }
    // move dragged elem to the selected drop target
    }resetgrid()
    
  });

 

