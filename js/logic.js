let jugadapc;
let jugadauser;
let totaluser = 0;
let totalpc = 0;
const container = document.querySelector(".results");
const resultadoPc = document.createElement("p");
const resultadoUser = document.createElement("p");
const ganadorPc = document.createElement("p");
const ganadorUser = document.createElement("p");

function computerPlay(){
    let eleccion = Math.random();
    let eleccion2 = eleccion * 3;
    let eleccion3 = Math.floor(eleccion2);

    if (eleccion3 == 0) {
        return jugadapc = "Rock" 
    }else if (eleccion3 == 1) {
        return jugadapc = "Paper"
    }else {
        return jugadapc = "Scissors"
    }
}

function userPlay(string){
    eleccion = string;

    if (eleccion  == "Rock") {
        return jugadauser = "Rock" 
    }else if (eleccion  == "Paper") {
        return jugadauser = "Paper"
    }else if(eleccion  == "Scissors"){
        return jugadauser = "Scissors"
    }
}

function playFunction(jugadapc, jugadauser){

    if (jugadapc == "Rock" && jugadauser == "Scissors") {
        return totalpc++;
    }
    else if (jugadauser == "Rock" && jugadapc == "Scissors") {
        return totaluser++;
    }
    else if (jugadapc == "Paper" && jugadauser == "Rock") {
        return totalpc++;
    }
    else if (jugadauser == "Paper" && jugadapc == "Rock") {
        return totaluser++;
    }
    else if (jugadapc == "Scissors" && jugadauser == "Paper") {
        return totalpc++;
    }
    else if (jugadauser == "Scissors" && jugadapc == "Paper") {
        return totaluser++;
    }
    // if (jugadapc == "Rock" && jugadauser == "Rock") {
    //     return draw
    // }
    // else if (jugadapc == "Paper" && jugadauser == "Paper") {
    //     return draw
    // }
    // else if (jugadapc == "Scissors" && jugadauser == "Scissors") {
    //     return draw
    // }
}

function winner(){
    if (totaluser == 5) {
        ganadorUser.textContent = "The winner is the User!";
        container.appendChild(ganadorUser);
    } else if(totalpc == 5){
        ganadorPc.textContent = "The winner is the CPU!";
        container.appendChild(ganadorPc);
    }
}

function game(jugadauser){
    let ganador = "And the winner is: ";
        //let jugadauser = window.prompt("Insert the play that you are gonna make aganist the CPU");
        playFunction(computerPlay(), userPlay(jugadauser));
        if (totaluser >= 3) {
            return console.log(ganador + "The user!");
        } else if(totalpc >= 3){
            return console.log(ganador + "The computer!");
        }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {    
    button.addEventListener("click" , function(e){
        game(button.textContent);
        winner();
        showResult(totaluser, totalpc);
    });
  });

function showResult(totaluser, totalpc){
    resultadoPc.textContent = "Computer score: " + totalpc;
    resultadoUser.textContent = "User score: " + totaluser
    container.appendChild(resultadoPc);
    container.appendChild(resultadoUser);
}