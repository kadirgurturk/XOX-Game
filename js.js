const playerText = document.getElementById("player");
const blocks = document.querySelectorAll(".block");
const errorText = document.getElementById("eror");
const info = document.querySelector(".info")
let player = "X";
let gameOver = false; 
let isTie = false;
let winner ;



function startGame(){
    
    blocks.forEach(block => block.removeEventListener("click", chooseArea));
    blocks.forEach(block => block.textContent = "")
    blocks.forEach(block => block.style.pointerEvents = "auto")

    playerText.textContent = `${player}'s turn`;

    blocks.forEach(block => block.addEventListener("click",() => chooseArea(block))
    
        
    );
}

function chooseArea(block){
    console.log(block.textContent);
    if(block.textContent === ""){
        block.textContent = player;
        turnPlayer();
    
        
    }else{
        
        errorText.textContent = "Seçilen Hücre Dolu Başka Bir Hücre Seçin";

        setTimeout(()=>{errorText.textContent = "" },800)
         
    }

    checkTie();
    checkWin();
    

    if(gameOver){
        if(isTie){
            console.log("Tie")
            playerText.textContent = `Beraberlik!`;
            
            blocks.forEach(block => block.style.pointerEvents = "none")
            
        }else{
            console.log("w");
            playerText.textContent = `${winner} kazandı`;
            
            blocks.forEach(block => block.style.pointerEvents = "none");
        }
        
        
    }    

}



function turnPlayer(){
    if (player === "X"){
        player =  "O";
        playerText.textContent = `${player}'s turn`;
        return;
    }else if(player === "O"){
        player =  "X";
        playerText.textContent = `${player}'s turn`;
        return
    }

}
function checkWin(){
    checkRows();
    checkColumns();
    CheckDigonal();

}

function checkRows(){
    let row1 = blocks[0].textContent == blocks[1].textContent && 
    blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== "";
    let row2 = blocks[3].textContent == blocks[4].textContent && 
    blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== "";;
    let row3 = blocks[6].textContent == blocks[7].textContent && 
    blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== "";;
    if(row1 || row2 || row3){
        gameOver = true;}
        if(row1){
            return winner = blocks[0].textContent;
        }
        if(row2){
            return winner = blocks[3].textContent; 
        }
        if(row3){
            return winner = blocks[6].textContent;
        }

}

function checkColumns(){
    let column1 = blocks[0].textContent == blocks[3].textContent &&
    blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== "";
    let column2 = blocks[1].textContent == blocks[4].textContent &&
    blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== "";
    let column3 = blocks[2].textContent == blocks[5].textContent &&
    blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !== "";
    if(column1 || column2 || column3){
        gameOver = true;
    }
    if(column1){
        return winner = blocks[0].textContent
    }
    if(column2){
        return winner = blocks[1].textContent
    }
    if(column1){
        return winner = blocks[2].textContent
    }

}

function checkTie(){
    
    if(Array.from(blocks).every(block => {return block.textContent !== ""}) ) {
        isTie = true
        gameOver = true
    }
    
}

function CheckDigonal(){
    let check1 =  blocks[0].textContent == blocks[4].textContent &&
    blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== "";
    let check2 = blocks[2].textContent == blocks[4].textContent &&
    blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== "";
    if(check1 || check2){
        gameOver = true
    }
    if(check1){
        return winner = blocks[0].textContent;
    }
    if(check2){
        return winner = blocks[2].textContent;
    }

}

startGame();