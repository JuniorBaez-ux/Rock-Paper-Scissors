let jugadapc;
let jugadauser;
let totaluser = 0;
let totalpc = 0;

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
    eleccion = string.toUpperCase();

    if (eleccion  == "ROCK") {
        return jugadauser = "Rock" 
    }else if (eleccion  == "PAPER") {
        return jugadauser = "Paper"
    }else if(eleccion  == "SCISSORS"){
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

function game(jugadauser){
    let ganador = "And the winner is: ";

    for (let j = 0; j < 5; j++) {
        let jugadauser = window.prompt("Insert the play that you are gonna make aganist the CPU");
        playFunction(computerPlay(), userPlay(jugadauser));
        if (totaluser >= 3) {
            return console.log(ganador + "The user!");
        } else if(totalpc >= 3){
            return console.log(ganador + "The computer!");
        }
    }
}