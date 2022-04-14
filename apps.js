const ship =$(".ship");
const playergrid=$(".playergrid");
const computerGrid=$(".computergrid")
const body = document.body;
const message = document.querySelector(".message")
let state="";



let shipSelect="";
let playerGrids=[];
let computerGrids=[];
let rotation=true;

let playerCommander=[];
let playerDestroyer=[];
let playerBattalion=[];
let playerCruiser=[];
let playerDamage=[];

let computerCommander=[];
let computerDestroyer=[];
let computerBattalion=[];
let computerCruiser=[];
let computerDamage=[];

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
    // event.target.style.opacity = .5;
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
          ship.css("grid-template-columns","repeat(5,120px)")
          ship.css("grid-template-rows","120px")
          $(".ships").css("display","inline")
          $(".Commander-Ship img").attr("src","https://cdn.discordapp.com/attachments/963368879927730188/963687046294143006/new_commander-ship.png")
          $(".Destroyer img").attr("src","https://cdn.discordapp.com/attachments/963368879927730188/963677484606423100/commander-Recovered.png")
          $(".Battalion img").attr("src","https://cdn.discordapp.com/attachments/963368879927730188/963695117854732359/battalion_clk.png")
          $(".Cruiser img").attr("src","https://cdn.discordapp.com/attachments/963368879927730188/963699935344205865/Cruise_ship_rotate.png")
          rotation=false;
      }else{
          ship.css("grid-template-columns","120px")
          ship.css("grid-template-rows","repeat(5,120px)")
          $(".ships").css("display","flex")
          $(".Commander-Ship img").attr("src","https://cdn.discordapp.com/attachments/963368879927730188/963707144937566218/new_commander_ship.png")
          $(".Destroyer img").attr("src","https://cdn.discordapp.com/attachments/963368879927730188/963368947766398996/commander_2.png")
          $(".Battalion img").attr("src","https://cdn.discordapp.com/attachments/963368879927730188/963691108058148955/battalion.png")
          $(".Cruiser img").attr("src","https://cdn.discordapp.com/attachments/963368879927730188/963699265379659776/Cruiser.png") 
          rotation=true
      }
      
  })
    
const resetgrid = function(){
    for(let i=0 ; i<36; i++){
        squares[i].classList.remove("highlight");
        squares[i].classList.remove("red");
    }
  } 

  const playerReset = function(){
    playerGrids=[];
    playerDamage=[];
    playerCommander=[];
    playerDestroyer=[];
    playerBattalion=[]; 
    playerCruiser=[];
    
    for(let i=0 ; i<36; i++){
        squares[i].classList.remove("highlight");
        squares[i].classList.remove("red");
        squares[i].style.backgroundColor="";
        squares[i].style.backgroundImage="";
        squares[i].innerHTML="";
    }
    for(each of ship){
        each.style.opacity=1;
        each.setAttribute("draggable","true")
    }

  }

  const computerReset = function(){
      computerGrids=[];
      computerDamage=[];
      computerCommander=[];
      computerDestroyer=[];
      computerBattalion=[];
      computerCruiser=[];


    for(let i=0 ; i<36; i++){
        computerSquares[i].classList.remove("highlight");
        computerSquares[i].classList.remove("red");
        computerSquares[i].style.backgroundColor="";
        computerSquares[i].style.background="";
        computerSquares[i].innerHTML="";
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
             
             if((cubeNum !== undefined && squares[nextcube1] !== undefined && squares[nextcube2] !== undefined && squares[previouscube1] !== undefined && squares[previouscube2] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(nextcube2)===false && playerGrids.includes(previouscube1)===false && playerGrids.includes(previouscube2)===false && playerGrids.includes(cubeNum)===false)){

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

                if(noZones.includes(cubeNum)===false || playerGrids.includes(cubeNum) || playerGrids.includes(nextcube1) || playerGrids.includes(nextcube2) || playerGrids.includes(previouscube1) || playerGrids.includes(previouscube2 || playerGrids.includes(cubeNum)===false))
             
            //  if(cubeNum!==2 && cubeNum!==3 && cubeNum!==8 && cubeNum!==9 && cubeNum!==14 && cubeNum!==15 && cubeNum!==20 && cubeNum!==21 && cubeNum!==26 && cubeNum!==27 && cubeNum!==32 && cubeNum!==33)
            {
                selectCube.classList.add("red");
                squares[nextcube1].classList.add("red");
                squares[nextcube2].classList.add("red");
                squares[previouscube1].classList.add("red");
                squares[previouscube2].classList.add("red");
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
                
                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares[previouscube1] !== undefined && squares[previouscube2] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(previouscube1)===false && playerGrids.includes(previouscube2)===false){
                    
   
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

                if(noZones.includes(cubeNum)===false || playerGrids.includes(cubeNum) || playerGrids.includes(nextcube1) || playerGrids.includes(previouscube1) || playerGrids.includes(previouscube2)){
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

                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares[previouscube1] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(previouscube1)===false){
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


            //    End of Battalion
        }else if(shipSelect==="Cruiser"){

            if(rotation===true){
                nextcube1=cubeNum+6;  
                 

                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false){
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
                if(noZones.includes(cubeNum) || playerGrids.includes(cubeNum) || playerGrids.includes(nextcube1)){
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

                // selectCube.style.backgroundColor = "blue";
                // squares[nextcube1].style.backgroundColor = "blue";
                // squares[nextcube2].style.backgroundColor = "blue";
                // squares[previouscube1].style.backgroundColor = "blue";
                // squares[previouscube2].style.backgroundColor = "blue";
                playerGrids.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
                playerCommander.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2)
                $(".Commander-Ship").attr("draggable",false)
                $(".Commander-Ship").css("opacity","0.5")
                squares[previouscube2].innerHTML='<img src="https://cdn.discordapp.com/attachments/963368879927730188/963707144937566218/new_commander_ship.png" draggable="false" alt=""></img>'
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
                    // selectCube.style.backgroundColor = "blue";
                    // squares[nextcube1].style.backgroundColor = "blue";
                    // squares[nextcube2].style.backgroundColor = "blue";
                    // squares[previouscube1].style.backgroundColor = "blue";
                    // squares[previouscube2].style.backgroundColor = "blue";
                    playerGrids.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
                    playerCommander.push(cubeNum,nextcube1,nextcube2,previouscube1,previouscube2);
                    $(".Commander-Ship").attr("draggable",false)
                    $(".Commander-Ship").css("opacity","0.5")
                    squares[previouscube2].innerHTML='<img src="https://cdn.discordapp.com/attachments/963368879927730188/963687046294143006/new_commander-ship.png" draggable="false" alt=""></img>'
                }
            }
        
            // DROP DESTROYER
        }else if(shipSelect==="Destroyer"){

            if(rotation===true){
                nextcube1=cubeNum+6;
                
                previouscube1=cubeNum-6
                previouscube2=cubeNum-12
                
                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares[previouscube1] !== undefined && squares[previouscube2] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(previouscube1)===false && playerGrids.includes(previouscube2)===false){
                        // selectCube.style.backgroundColor = "pink";
                        // squares[nextcube1].style.backgroundColor = "pink";
                        // squares[previouscube1].style.backgroundColor = "pink";
                        // squares[previouscube2].style.backgroundColor = "pink";
                       playerGrids.push(cubeNum,nextcube1,previouscube1,previouscube2);
                       playerDestroyer.push(cubeNum,nextcube1,previouscube1,previouscube2);
                       $(".Destroyer").attr("draggable",false)
                       $(".Destroyer").css("opacity","0.5")
                       squares[previouscube2].innerHTML='<img src="https://cdn.discordapp.com/attachments/963368879927730188/963368947766398996/commander_2.png" draggable="false" alt=""></img>'
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
                
                    // selectCube.style.backgroundColor = "pink";
                    // squares[nextcube1].style.backgroundColor = "pink";
                    // squares[previouscube1].style.backgroundColor = "pink";
                    // squares[previouscube2].style.backgroundColor = "pink";
                    playerGrids.push(cubeNum,nextcube1,previouscube1,previouscube2);
                    playerDestroyer.push(cubeNum,nextcube1,previouscube1,previouscube2);
                    $(".Destroyer").attr("draggable",false)
                    $(".Destroyer").css("opacity","0.5")
                    squares[previouscube2].innerHTML='<img src="https://cdn.discordapp.com/attachments/963368879927730188/963677484606423100/commander-Recovered.png" draggable="false" alt=""></img>'
               }
            }

            // DROP BATTALION
        }else if(shipSelect==="Battalion"){

            if(rotation===true){
                nextcube1=cubeNum+6;  
                previouscube1=cubeNum-6;

                if(cubeNum !== undefined && squares[nextcube1] !== undefined  && squares[previouscube1] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false && playerGrids.includes(previouscube1)===false){
                    // selectCube.style.backgroundColor = "turquoise";
                    // squares[nextcube1].style.backgroundColor = "turquoise";
                    // squares[previouscube1].style.backgroundColor = "turquoise";
                    playerGrids.push(cubeNum,nextcube1,previouscube1);
                    playerBattalion.push(cubeNum,nextcube1,previouscube1);
                    $(".Battalion").attr("draggable",false)
                    $(".Battalion").css("opacity","0.5")
                    squares[previouscube1].innerHTML='<img src="https://cdn.discordapp.com/attachments/963368879927730188/963691108058148955/battalion.png" draggable="false" alt=""></img>'
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
                    // selectCube.style.backgroundColor = "turquoise";
                    // squares[nextcube1].style.backgroundColor = "turquoise";
                    // squares[previouscube1].style.backgroundColor = "turquoise";
                    playerGrids.push(cubeNum,nextcube1,previouscube1);
                    playerBattalion.push(cubeNum,nextcube1,previouscube1);
                    $(".Battalion").attr("draggable",false)
                    $(".Battalion").css("opacity","0.5")
                    squares[previouscube1].innerHTML='<img src="https://cdn.discordapp.com/attachments/963368879927730188/963695117854732359/battalion_clk.png" draggable="false" alt=""></img>'
                }
            }

            // DROP CRUISER
        }else if(shipSelect==="Cruiser"){

            if(rotation===true){
                nextcube1=cubeNum+6;
                if(cubeNum !== undefined && squares[nextcube1] !== undefined && playerGrids.includes(cubeNum)===false && playerGrids.includes(nextcube1)===false){
                    // selectCube.style.backgroundColor = "purple";
                    // squares[nextcube1].style.backgroundColor = "purple";
                    playerGrids.push(cubeNum,nextcube1);
                    playerCruiser.push(cubeNum,nextcube1);
                    $(".Cruiser").attr("draggable",false)
                    $(".Cruiser").css("opacity","0.5")
                    squares[cubeNum].innerHTML='<img src="https://cdn.discordapp.com/attachments/963368879927730188/963699265379659776/Cruiser.png" draggable="false" alt=""></img>'
  
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
                    // selectCube.style.backgroundColor = "purple";
                    // squares[nextcube1].style.backgroundColor = "purple";
                    playerGrids.push(cubeNum,nextcube1);
                    playerCruiser.push(cubeNum,nextcube1);
                    $(".Cruiser").attr("draggable",false)
                    $(".Cruiser").css("opacity","0.5")
                    squares[cubeNum].innerHTML='<img src="https://cdn.discordapp.com/attachments/963368879927730188/963699935344205865/Cruise_ship_rotate.png" draggable="false" alt=""></img>'
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
    playerReset()
}
)



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
        computerSquares[previouscube2].innerHTML='<img class="comCommander" src="https://cdn.discordapp.com/attachments/963368879927730188/963707144937566218/new_commander_ship.png" draggable="false" alt=""></img>'
        
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
            computerSquares[previouscube2].innerHTML='<img class="comCommander" src="https://cdn.discordapp.com/attachments/963368879927730188/963687046294143006/new_commander-ship.png" draggable="false" alt=""></img>'
            
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
           computerSquares[previouscube2].innerHTML='<img class="comDestroyer" src="https://cdn.discordapp.com/attachments/963368879927730188/963368947766398996/commander_2.png" draggable="false" alt=""></img>'
           
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
        computerSquares[previouscube2].innerHTML='<img class="comDestroyer" src="https://cdn.discordapp.com/attachments/963368879927730188/963677484606423100/commander-Recovered.png" draggable="false" alt=""></img>'
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
          computerSquares[previouscube1].innerHTML='<img class="comBattalion" src="https://cdn.discordapp.com/attachments/963368879927730188/963691108058148955/battalion.png" draggable="false" alt=""></img>'

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
       computerSquares[previouscube1].innerHTML='<img class="comBattalion" src="https://cdn.discordapp.com/attachments/963368879927730188/963695117854732359/battalion_clk.png" draggable="false" alt=""></img>'
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
          computerSquares[cubeNum].innerHTML='<img class="comCruiser" src="https://cdn.discordapp.com/attachments/963368879927730188/963699265379659776/Cruiser.png" draggable="false" alt=""></img>'
          
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
       computerSquares[cubeNum].innerHTML='<img class="comCruiser" src="https://cdn.discordapp.com/attachments/963368879927730188/963699935344205865/Cruise_ship_rotate.png" draggable="false" alt=""></img>'
    }else{
        generateCruiser()
    }
   }
  }
 
  generateCruiser()

  hideShip()

//   GAME START

computerGrid.on("click",playerAttack);

function playerAttack(event){
    let targetCube=event.target;

    if(state==="playerattack"){
        if(computerDamage.includes(parseInt(targetCube.classList[1]))===false){
            computerDamage.push(parseInt(targetCube.classList[1]))

            if (computerGrids.includes(parseInt(targetCube.classList[1]))){
                    targetCube.style.backgroundImage="url('https://media.giphy.com/media/JWMIlOuWpxMpvOqk58/giphy.gif')";
                    message.innerText="";
                    targetCube.style.backgroundColor="rgba(255, 0, 98, 0.356)"
                    document.querySelector(".play-hit").play()
                }else{
                    targetCube.innerHTML="<h2 class='x' >X</h2>";
                    message.innerText="";
                    document.querySelector(".play-atk").play()
                }

                let checkCruiser = computerCruiser.every( cube => computerDamage.includes(cube))
                let checkBattalion = computerBattalion.every( cube => computerDamage.includes(cube))
                let checkDestroyer = computerDestroyer.every( cube => computerDamage.includes(cube))
                let checkCommanderShip = computerCommander.every( cube => computerDamage.includes(cube))

                if(checkCruiser){
                    message.innerText="You sunk an enemy Cruiser"; 
                    $(".computergrid .comCruiser").css("display","inline")
                } 
                if(checkBattalion){
                    message.innerHTML="You sunk an enemy Batallion";
                    $(".computergrid .comBattalion").css("display","inline")
                }
                if(checkDestroyer){
                    message.innerHTML="You sunk an enemy Destroyer";
                    $(".computergrid .comDestroyer").css("display","inline")
                }
                if(checkCommanderShip){
                    message.innerHTML="You sunk an enemy Commander Ship";
                    $(".computergrid .comCommander").css("display","inline")
                };

                if(checkCruiser && checkBattalion && checkDestroyer && checkCommanderShip ){
                    playerWins()
                }else{
                    state="computerattack"
                setTimeout(computerAttack,1000)
                }
                
      }
    }

    
 }
    


let lastHit
    let hit=false;
    let possibleShip=[-1,1,6,-6];
    let lastHitPoss
    function randomPossibility(){
        return possibleShip[Math.floor(Math.random()*4)];
    }
    let attackCube=0;


function computerAttack(){
    if(state!=="GameOver"){
        // checks for last hit
        

    //     if(lastHitPoss!==undefined && lastHitPoss.every(num => playerDamage.includes(num))===false){
    //          console.log("last hit has valid poss");
    //          attackNext=lastHit+randomPossibility();

    //          let secondAtk=lastHitPoss.filter(num => num > -1 && num < 36)
    //          console.log(secondAtk)
    //          const trueArr=secondAtk.every(num => playerDamage.includes(num))===true;
    //          console.log(trueArr)
    //          if(attackNext > -1 && attackNext < 36){
    //              console.log("halfway there")
    //              if(trueArr){
    //                  console.log("last hit but no more values")
    //                  hit=false;
    //              }else{
    //                  hit=true;
    //              }
    //          }else{    
    //             hit=true;
    //          {
             
    //         }
    //     }
    // }

    let possAtk=[lastHit-1,lastHit+1,lastHit-6,lastHit+6]
    // console.log("poss atk" + possAtk)
    
    let possAtkPositive = possAtk.map(num=>Math.abs(num))
    // console.log(possAtkPositive)

    let checkNumbers = possAtkPositive.filter(num => num > -1 && num < 36)
    console.log(checkNumbers)

    if(hit){
        if(checkNumbers.every(num => playerDamage.includes(num))===true){
            console.log("true again")
            attackCube= Math.floor(Math.random()*36)
        }else{
        attackCube=attackNext;
        }
    }else{
        // console.log("missed and no other valuesleft")
        attackCube= Math.floor(Math.random()*36)
    }

    console.log(attackCube)

    if(attackCube !==undefined && attackCube > -1 && attackCube < 36 && playerDamage.includes(attackCube)===false){
    playerDamage.push(attackCube)
    }else{
        attackNext=lastHit+randomPossibility();
        computerAttack();
    }

    // If it hits a ship
    if(playerGrids.includes(attackCube)){
        squares[attackCube].style.backgroundImage="url('https://media.giphy.com/media/JWMIlOuWpxMpvOqk58/giphy.gif')";
        squares[attackCube].style.backgroundColor="rgba(255, 0, 98, 0.356)"
        hit=true
        lastHit=attackCube;
        attackNext=lastHit+randomPossibility();
        document.querySelector(".com-hit").play()
        // console.log("attack"+attackNext);

    }else{

        if(lastHit !== undefined){
            let FinalAttempt = [...possAtkPositive]
        lastHitPoss=FinalAttempt.filter(num => num > -1 && num < 36);
    }
        squares[attackCube].innerHTML="<h2 class='x'>X</h2>";
        document.querySelector(".com-atk").play()
        hit=false;
    }

    // Display Messages
    let checkCruiser = playerCruiser.every( cube => playerDamage.includes(cube))
    let checkBattalion = playerBattalion.every( cube => playerDamage.includes(cube))
    let checkDestroyer = playerDestroyer.every( cube => playerDamage.includes(cube))
    let checkCommanderShip = playerCommander.every( cube => playerDamage.includes(cube))

    if(checkCruiser){
        message.innerHTML="Mavericks sunk your Cruiser"; 
    } 
    if(checkBattalion){
        message.innerHTML="Mavericks sunk your Batallion";
    }
    if(checkDestroyer){
        message.innerHTML="Mavericks sunk your Destroyer";
    }
    if(checkCommanderShip){
        message.innerHTML="Mavericks sunk your Commander Ship";
    };

    if(checkCruiser && checkBattalion && checkDestroyer && checkCommanderShip){
        ComputerWins();
    }else{
        state="playerattack"}
    }
 
}


function playerWins(){
    message.innerHTML="You Destroyed all enemy Ships.Congrats";
    state="GameOver";
}
function ComputerWins(){
    message.innerHTML="All your ships were destroyed. you lost";
    state="GameOver";
}

function hideShip(){
    $(".computergrid img").css("display","none")
    for(let i=0 ; i<36; i++){
        computerSquares[i].classList.remove("highlight");
        computerSquares[i].classList.remove("red");
        computerSquares[i].style.backgroundColor="";
    }
}

hideShip()
// if(state==="computerattack"){
//     computerAttack();
// }
function showShip(){
    $(".computergrid img").css("display","inline")
}

$(".start").on("click",function(){
    if(playerGrids.length===14){
    state="playerattack";
    $(".start").css("display","none")
    $(".rotate").css("display","none")
    $(".reset").css("display","none")
    $(".megaman").prepend('<button class="endGame">EndGame</button>');

    $(".endGame").on("click",function(){
    state="GameOver";
    message.innerHTML="Game was ended"
    $(".megaman").prepend('<button class="restart">Restart</button>');

    $(".restart").on("click",function(){
        state="";
        message.innerHTML="This Time we'll get them for sure";
    $(".endGame").css("display","none")
    $(".restart").css("display","none")
    $(".start").css("display","inline")
    $(".rotate").css("display","inline")
    $(".reset").css("display","inline")
     playerReset()
     computerReset()
     generateCommanderShip()
     generateBattalion()
     generateDestroyer()
     generateCruiser()
     hideShip()
    })
    })
  }
 })

document.querySelector("audio").volume=.1