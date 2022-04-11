const ship =$(".ship");
const playergrid=$(".playergrid");
const computerGrid=$(".computergrid")
const body = document.body;

let shipSelect="";
let playerGrids=[]
let computerGrids=[]
let rotation=true;

let playerCommander=[];
let playerDestroyer=[];
let playerBattalion=[];
let playerCruiser=[];

let computerCommander=[];
let computerDestroyer=[];
let computerBattalion=[];
let computerCruiser=[];

const generateGridPlayer= num =>{
    for(let i=0;i<num;i++){
    let grid=document.createElement("div")
    grid.classList.add("square")
    grid.classList.add(`${i}`)
    playergrid.append(grid)
    }
}
generateGridPlayer(36);

const generateGridComputer= num =>{
    for(let i=0;i<num;i++){
    let grid=document.createElement("div")
    grid.classList.add("square")
    grid.classList.add(`${i}`)
    computerGrid.append(grid)
    }
}
generateGridComputer(36);



ship.on("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
    shipSelect=event.target.classList[2]
  });

  const squares=$(".playergrid .square");
  const computerSquares=$(".computergrid .square")

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

                selectCube.classList.add("highlight");
                squares[nextcube1].classList.add("highlight");
                squares[nextcube2].classList.add("highlight");
                squares[previouscube1].classList.add("highlight");
                squares[previouscube2].classList.add("highlight");
            }else{
                selectCube.classList.add("red");
                squares[nextcube1].classList.add("red");
                squares[nextcube2].classList.add("red");
                squares[previouscube1].classList.add("red");
                squares[previouscube2].classList.add("red");
            };
        }else{
             nextcube1=cubeNum+1;
             nextcube2=cubeNum+2
             previouscube1=cubeNum-1
             previouscube2=cubeNum-2

             let noZones=[]
                let count2=2;
                let count3=3;
                 
                for(let i=0 ;i<7;i++){
                     noZones.push(count2);
                     noZones.push(count3);
                     count2+=6;
                     count3+=6;  
                    }

                if(noZones.includes(cubeNum)===false)
             
            //  if(cubeNum!==2 && cubeNum!==3 && cubeNum!==8 && cubeNum!==9 && cubeNum!==14 && cubeNum!==15 && cubeNum!==20 && cubeNum!==21 && cubeNum!==26 && cubeNum!==27 && cubeNum!==32 && cubeNum!==33)
            {
                selectCube.classList.add("red");
                squares[nextcube1].classList.add("red");
                squares[nextcube2].classList.remove("highlight");
                squares[previouscube1].classList.add("red");
                squares[previouscube2].classList.remove("highlight");
            }else{
                selectCube.classList.add("highlight");
                squares[nextcube1].classList.add("highlight");
                squares[nextcube2].classList.add("highlight");
                squares[previouscube1].classList.add("highlight");
                squares[previouscube2].classList.add("highlight");
                };
            }
    

            // END OF COMMANDER SHIP

        }else if(shipSelect==="Destroyer"){

            if(rotation===true){
                nextcube1=cubeNum+6;
                
                previouscube1=cubeNum-6
                previouscube2=cubeNum-12
                
                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares[previouscube1] !== undefined && squares[previouscube2] !== undefined){
                    
   
                   selectCube.classList.add("highlight");
                   squares[nextcube1].classList.add("highlight");
                   squares[previouscube1].classList.add("highlight");
                   squares[previouscube2].classList.add("highlight");
               }else{
                   selectCube.classList.add("red");
                   squares[nextcube1].classList.add("red");
                   squares[previouscube1].classList.add("red");
                   squares[previouscube2].classList.add("red");
               };
           }else{
                nextcube1=cubeNum+1;
                previouscube1=cubeNum-1
                previouscube2=cubeNum-2
                nextcube2=cubeNum+2;

                let noZones=[]
                let count2=2;
                let count3=3;
                let count4=4;
                for(let i=0 ;i<7;i++){
                     noZones.push(count2);
                     noZones.push(count3);
                     noZones.push(count4);
                     count2+=6;
                     count3+=6;
                     count4+=6;
                    }

                if(noZones.includes(cubeNum)===false){
                   selectCube.classList.add("red");
                   squares[nextcube1].classList.add("red");
                   squares[previouscube1].classList.add("red");
                   squares[previouscube2].classList.remove("highlight");
               }else{
                   selectCube.classList.add("highlight");
                   squares[nextcube1].classList.add("highlight");
                   squares[previouscube1].classList.add("highlight");
                   squares[previouscube2].classList.add("highlight");
                   };
               }

            //    END of DESTROYER SHIP 

        }else if(shipSelect==="Battalion"){

            if(rotation===true){
                nextcube1=cubeNum+6;  
                previouscube1=cubeNum-6;

                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares[previouscube1] !== undefined){
                   selectCube.classList.add("highlight");
                   squares[nextcube1].classList.add("highlight");
                   squares[previouscube1].classList.add("highlight");
               }else{
                   selectCube.classList.add("red");
                   squares[nextcube1].classList.add("red");
                   squares[previouscube1].classList.add("red");
               }
           }else{
                nextcube1=cubeNum+1;
                previouscube1=cubeNum-1
                
                
                let noZones=[]
                let count5=5;
                let count0=0;
                for(let i=0 ;i<7;i++){
                     noZones.push(count0)
                     noZones.push(count5)
                     count5+=6;
                     count0+=6;   
                }
                if(noZones.includes(cubeNum)){
                   selectCube.classList.add("red");
                   squares[nextcube1].classList.add("red");
                   squares[previouscube1].classList.add("red");
               }else{
                   selectCube.classList.add("highlight");
                   squares[nextcube1].classList.add("highlight");
                   squares[previouscube1].classList.add("highlight");
                   };
               }
        }else if(shipSelect==="Cruiser"){

            if(rotation===true){
                nextcube1=cubeNum+6;  
                 

                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false){
                   selectCube.classList.add("highlight");
                   squares[nextcube1].classList.add("highlight");
                   
               }else{
                   selectCube.classList.add("red");
                   squares[nextcube1].classList.add("red");
                   
               }
           }else{
                nextcube1=cubeNum+1;
                let noZones=[]
                let count5=5;
                
                for(let i=0 ;i<7;i++){
                     
                     noZones.push(count5)
                     count5+=6;
                        
                }
                if(noZones.includes(cubeNum)){
                   selectCube.classList.add("red");
                   squares[nextcube1].classList.add("red");
                   
               }else{
                   selectCube.classList.add("highlight");
                   squares[nextcube1].classList.add("highlight");
                   
                   };
               }
        }
    }})


    playergrid.on("drop", function(event){
    // prevent default action (open as link for some elements)
    event.preventDefault();
    let selectCube=event.target;
    let cubeNum=parseInt(selectCube.classList[1])
    if(event.target.parentElement.className === "playergrid"){
        // DROP COMMANDER SHIP
        if(shipSelect==="Commander-Ship"){
            if(rotation===true){
                nextcube1=cubeNum+6;
                nextcube2=cubeNum+12;
                previouscube1=cubeNum-6;
                previouscube2=cubeNum-12;

                if(cubeNum !== undefined && squares[nextcube1] !== undefined && squares[nextcube2] !== undefined && squares[previouscube1] !== undefined && squares[previouscube2] !==undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(nextcube2)===false && playerGrids.includes(previouscube1)===false && playerGrids.includes(previouscube2)===false){

                selectCube.style.backgroundColor = "blue";
                squares[nextcube1].style.backgroundColor = "blue";
                squares[nextcube2].style.backgroundColor = "blue";
                squares[previouscube1].style.backgroundColor = "blue";
                squares[previouscube2].style.backgroundColor = "blue";
                playerGrids.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
                playerCommander.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2)
                }
                
            }else{
                nextcube1=cubeNum+1;
                nextcube2=cubeNum+2;
                previouscube1=cubeNum-1;
                previouscube2=cubeNum-2;

                let noZones=[]
                let count2=2;
                let count3=3;
                 
                for(let i=0 ;i<7;i++){
                     noZones.push(count2);
                     noZones.push(count3);
                     count2+=6;
                     count3+=6;  
                    }

                if(noZones.includes(cubeNum) && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(nextcube2)===false && playerGrids.includes(previouscube1)===false && playerGrids.includes(previouscube2)===false){
                    selectCube.style.backgroundColor = "blue";
                    squares[nextcube1].style.backgroundColor = "blue";
                    squares[nextcube2].style.backgroundColor = "blue";
                    squares[previouscube1].style.backgroundColor = "blue";
                    squares[previouscube2].style.backgroundColor = "blue";
                    playerGrids.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
                    playerCommander.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
                }
            }
        
            // DROP DESTROYER
        }else if(shipSelect==="Destroyer"){

            if(rotation===true){
                nextcube1=cubeNum+6;
                
                previouscube1=cubeNum-6
                previouscube2=cubeNum-12
                
                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares[previouscube1] !== undefined && squares[previouscube2] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(previouscube1)===false && playerGrids.includes(previouscube2)===false){
                        selectCube.style.backgroundColor = "pink";
                        squares[nextcube1].style.backgroundColor = "pink";
                        squares[previouscube1].style.backgroundColor = "pink";
                        squares[previouscube2].style.backgroundColor = "pink";
                       playerGrids.push(cubeNum,nextcube1,previouscube1,previouscube2);
                       playerDestroyer.push(cubeNum,nextcube1,previouscube1,previouscube2);
               }
           }else{
                nextcube1=cubeNum+1;
                previouscube1=cubeNum-1
                previouscube2=cubeNum-2

                let noZones=[]
                let count2=2;
                let count3=3;
                let count4=4;
                for(let i=0 ;i<7;i++){
                     noZones.push(count2);
                     noZones.push(count3);
                     noZones.push(count4);
                     count2+=6;
                     count3+=6;
                     count4+=6;
                    }

                if(noZones.includes(cubeNum) && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(previouscube1)===false && playerGrids.includes(previouscube2)===false){
                
                    selectCube.style.backgroundColor = "pink";
                    squares[nextcube1].style.backgroundColor = "pink";
                    squares[previouscube1].style.backgroundColor = "pink";
                    squares[previouscube2].style.backgroundColor = "pink";
                    playerGrids.push(cubeNum,nextcube1,previouscube1,previouscube2);
                    playerDestroyer.push(cubeNum,nextcube1,previouscube1,previouscube2);
               }
            }

            // DROP BATTALION
        }else if(shipSelect==="Battalion"){

            if(rotation===true){
                nextcube1=cubeNum+6;  
                previouscube1=cubeNum-6;

                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares[previouscube1] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(previouscube1)===false){
                    selectCube.style.backgroundColor = "turquoise";
                    squares[nextcube1].style.backgroundColor = "turquoise";
                    squares[previouscube1].style.backgroundColor = "turquoise";
                    playerGrids.push(cubeNum,nextcube1,previouscube1);
                    playerBattalion.push(cubeNum,nextcube1,previouscube1);
               }
           }else{
                nextcube1=cubeNum+1;
                previouscube1=cubeNum-1
                
                let noZones=[]
                let count5=5;
                let count0=0;
                for(let i=0 ;i<7;i++){
                     noZones.push(count0)
                     noZones.push(count5)
                     count5+=6;
                     count0+=6;   
                }
                if(noZones.includes(cubeNum)===false && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(previouscube1)===false){
                    selectCube.style.backgroundColor = "turquoise";
                    squares[nextcube1].style.backgroundColor = "turquoise";
                    squares[previouscube1].style.backgroundColor = "turquoise";
                    playerGrids.push(cubeNum,nextcube1,previouscube1);
                    playerBattalion.push(cubeNum,nextcube1,previouscube1);
                }
            }

            // DROP CRUISER
        }else if(shipSelect==="Cruiser"){

            if(rotation===true){
                nextcube1=cubeNum+6;
                if(cubeNum !== undefined && squares[nextcube1] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false){
                    
                    selectCube.style.backgroundColor = "purple";
                    squares[nextcube1].style.backgroundColor = "purple";
                    playerGrids.push(cubeNum,nextcube1);
                    playerCruiser.push(cubeNum,nextcube1);
               }
           }else{
                nextcube1=cubeNum+1;
                previouscube1=cubeNum-1
                
                let noZones=[]
                let count5=5;
                for(let i=0 ;i<7;i++){
                     noZones.push(count5)
                     count5+=6;      
                }
                if(noZones.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false){
                    selectCube.style.backgroundColor = "purple";
                    squares[nextcube1].style.backgroundColor = "purple";
                    playerGrids.push(cubeNum,nextcube1);
                    playerCruiser.push(cubeNum,nextcube1);
                }
            }
        }resetgrid()
    }
});

// If drop element is not on player-grid. It will reset red color to blank
  $("body").on("drop", function(event){
    let selectCube=event.target;
    let cubeNum=parseInt(selectCube.classList[1])
    if(event.target.parentElement.className !== "playergrid"){
        resetgrid()
  }})

 
$(".reset").on("click",function(){
    playerGrids=[];
    for(let i=0 ; i<36; i++){
        squares[i].classList.remove("highlight");
        squares[i].classList.remove("red");
        squares[i].style.backgroundColor="";
    }
})


// Generate CommanderShip
function generateCommanderShip(){
    let computerRotate=true;
    
    let trueOrFalse=Math.floor(Math.random()*2)

    if(trueOrFalse===0){
        computerRotate=true
    }else{
        computerRotate=false
    }
    const cubeNum=Math.floor(Math.random()*35);
    let selectCube=computerSquares[cubeNum];
    if(computerRotate===true){
        nextcube1=cubeNum+6;
        nextcube2=cubeNum+12;
        previouscube1=cubeNum-6;
        previouscube2=cubeNum-12;

        if(cubeNum !== undefined && computerSquares[nextcube1] !== undefined && computerSquares[nextcube2] !== undefined && computerSquares[previouscube1] !== undefined && computerSquares[previouscube2] !==undefined && computerGrids.includes(cubeNum)===false && computerGrids.includes(nextcube1)===false && computerGrids.includes(nextcube2)===false && computerGrids.includes(previouscube1)===false && computerGrids.includes(previouscube2)===false)
        {
        selectCube.style.backgroundColor="blue";
        computerSquares[nextcube1].style.backgroundColor = "blue";
        computerSquares[nextcube2].style.backgroundColor = "blue";
        computerSquares[previouscube1].style.backgroundColor = "blue";
        computerSquares[previouscube2].style.backgroundColor = "blue";
        computerGrids.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
        computerCommander.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
        }else{
            generateCommanderShip()
        }
        
    }else{
        nextcube1=cubeNum+1;
        nextcube2=cubeNum+2;
        previouscube1=cubeNum-1;
        previouscube2=cubeNum-2;

        let noZones=[]
        let count2=2;
        let count3=3;
         
        for(let i=0 ;i<7;i++){
             noZones.push(count2);
             noZones.push(count3);
             count2+=6;
             count3+=6;  
            }

        if(noZones.includes(cubeNum) && computerGrids.includes(cubeNum)===false && computerGrids.includes(nextcube1)===false && computerGrids.includes(nextcube2)===false && computerGrids.includes(previouscube1)===false && computerGrids.includes(previouscube2)===false){
            selectCube.style.backgroundColor = "blue";
            computerSquares[nextcube1].style.backgroundColor = "blue";
            computerSquares[nextcube2].style.backgroundColor = "blue";
            computerSquares[previouscube1].style.backgroundColor = "blue";
            computerSquares[previouscube2].style.backgroundColor = "blue";
            computerGrids.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
            computerCommander.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
            return
        }else{
            generateCommanderShip()
        }
    }
}

generateCommanderShip()

// Generate Destroyer
    const generateDestroyer=()=>{
     let computerRotate2=false;
    
     let trueOrFalse2=Math.floor(Math.random()*2)

    if(trueOrFalse2===0){
        computerRotate2=true
    }else{
        computerRotate2=false
    }
    
    const cubeNum=Math.floor(Math.random()*35);
    let selectCube=computerSquares[cubeNum];
    if(computerRotate2===true){
        nextcube1=cubeNum+6;
        previouscube1=cubeNum-6;
        previouscube2=cubeNum-12;

        if(cubeNum!== undefined && computerSquares[nextcube1] !== undefined  && computerSquares[previouscube1] !== undefined && computerSquares[previouscube2] !== undefined && computerGrids.includes(cubeNum)===false && computerGrids.includes(nextcube1)===false && computerGrids.includes(previouscube1)===false && computerGrids.includes(previouscube2)===false){

            selectCube.style.backgroundColor = "pink";
            computerSquares[nextcube1].style.backgroundColor = "pink";
            computerSquares[previouscube1].style.backgroundColor = "pink";
            computerSquares[previouscube2].style.backgroundColor = "pink";
           computerGrids.push(cubeNum,nextcube1,previouscube1,previouscube2);
           computerDestroyer.push(cubeNum,nextcube1,previouscube1,previouscube2);
           console.log(computerGrids)
        }else{
            generateDestroyer()
        }

    }else{
        nextcube1=cubeNum+1;
        previouscube1=cubeNum-1
        previouscube2=cubeNum-2

        let noZones=[]
        let count2=2;
        let count3=3;
        let count4=4;
        for(let i=0 ;i<7;i++){
         noZones.push(count2);
         noZones.push(count3);
         noZones.push(count4);
         count2+=6;
         count3+=6;
         count4+=6;
        }

        if(noZones.includes(cubeNum) && computerGrids.includes(cubeNum)===false && computerGrids.includes(nextcube1)===false && computerGrids.includes(previouscube1)===false && computerGrids.includes(previouscube2)===false){
        selectCube.style.backgroundColor = "pink";
        computerSquares[nextcube1].style.backgroundColor = "pink";
        computerSquares[previouscube1].style.backgroundColor = "pink";
        computerSquares[previouscube2].style.backgroundColor = "pink";
        computerGrids.push(cubeNum,nextcube1,previouscube1,previouscube2);
        computerDestroyer.push(cubeNum,nextcube1,previouscube1,previouscube2);
     }else{
         generateDestroyer()
     }
    }

   }
   generateDestroyer()

   // Generate Battalion
   const generateBattalion=()=>{
    let computerRotate2=true;
   
    let trueOrFalse2=Math.floor(Math.random()*2)

   if(trueOrFalse2===0){
       computerRotate2=true
   }else{
       computerRotate2=false
   }
   
   const cubeNum=Math.floor(Math.random()*35);
   let selectCube=computerSquares[cubeNum];
   if(computerRotate2===true){
       nextcube1=cubeNum+6;
       previouscube1=cubeNum-6;

       if(cubeNum!== undefined && computerSquares[nextcube1] !== undefined  && computerSquares[previouscube1] !== undefined && computerSquares[previouscube2] !== undefined && computerGrids.includes(cubeNum)===false && computerGrids.includes(nextcube1)===false && computerGrids.includes(previouscube1)===false){

           selectCube.style.backgroundColor = "turquoise";
           computerSquares[nextcube1].style.backgroundColor = "turquoise";
           computerSquares[previouscube1].style.backgroundColor = "turquoise";
          computerGrids.push(cubeNum,nextcube1,previouscube1);
          computerBattalion.push(cubeNum,nextcube1,previouscube1);

       }else{
           generateBattalion()
       }
       
   }else{
       nextcube1=cubeNum+1;
       previouscube1=cubeNum-1

       let noZones=[]
       let count5=5;
       let count0=0;
       for(let i=0 ;i<7;i++){
         noZones.push(count0)
         noZones.push(count5)
          count5+=6;
          count0+=6;
        }

       if(noZones.includes(cubeNum)===false && computerGrids.includes(cubeNum)===false && computerGrids.includes(nextcube1)===false && computerGrids.includes(previouscube1)===false){

       selectCube.style.backgroundColor = "turquoise";
       computerSquares[nextcube1].style.backgroundColor = "turquoise";
       computerSquares[previouscube1].style.backgroundColor = "turquoise";
       computerGrids.push(cubeNum,nextcube1,previouscube1);
       computerBattalion.push(cubeNum,nextcube1,previouscube1);
    }else{
        generateBattalion()
    }
   }

  }
 
  generateBattalion()


  // Generate Cruiser
  const generateCruiser=()=>{
    let computerRotate2=false;
   
    let trueOrFalse2=Math.floor(Math.random()*2)

   if(trueOrFalse2===0){
       computerRotate2=true
   }else{
       computerRotate2=false
   }
   
   const cubeNum=Math.floor(Math.random()*35);
   let selectCube=computerSquares[cubeNum];
   if(computerRotate2===true){
       nextcube1=cubeNum+6;

       if(cubeNum!== undefined && computerSquares[nextcube1] !== undefined  && computerSquares[previouscube1] !== undefined && computerSquares[previouscube2] !== undefined && computerGrids.includes(cubeNum)===false && computerGrids.includes(nextcube1)===false){

           selectCube.style.backgroundColor = "purple";
           computerSquares[nextcube1].style.backgroundColor = "purple";
          computerGrids.push(cubeNum,nextcube1);
          computerCruiser.push(cubeNum,nextcube1);
          
       }else{
           generateCruiser()
       }
       
   }else{
       nextcube1=cubeNum+1;
       previouscube1=cubeNum-1

       let noZones=[]
       let count5=5;
        for(let i=0 ;i<7;i++){
            noZones.push(count5)
            count5+=6;
        }

       if(noZones.includes(cubeNum)===false && computerGrids.includes(cubeNum)===false && computerGrids.includes(nextcube1)===false){

       selectCube.style.backgroundColor = "purple";
       computerSquares[nextcube1].style.backgroundColor = "purple";
       computerGrids.push(cubeNum,nextcube1);
       computerCruiser.push(cubeNum,nextcube1);
    }else{
        generateCruiser()
    }
   }

  }
 
  generateCruiser()
