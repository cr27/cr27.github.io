var userScore = 0;  //var type allows user to update score
var computerScore = 0; //var type allows user to update score
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//function to generate random choice of r p or s
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
if(letter==="r") return "Rock";
if(letter==="p") return "Paper";
return "Scissors";
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    //console.log("WIN");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) +  " beats " + convertToWord(computerChoice) + ". You win!";
    //result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!;
    userChoice_div.classList.add('green-glow');
    setTimeout(function () { userChoice_div.classList.remove("green-glow") }, 300);
    
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You Lost!";
    //console.log("LOSE");
    userChoice_div.classList.add('red-glow');
    setTimeout(function () { userChoice_div.classList.remove("red-glow") }, 300);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". It's a draw.";
    //console.log("DRAW");
    userChoice_div.classList.add('gray-glow');
    setTimeout(function () { userChoice_div.classList.remove("gray-glow") }, 300);
}


//generate random 'r', 'p', 's' for both computer and user
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }

    //console.log("user choice =>" + userChoice);
    //console.log("computer choice => " + computerChoice)
}





function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();
/*================= EXAMPLE =================

var name2 = "jubril"

function greet (name1) {

    //console.log("hey" + " " + name1 + "and" + "" + name2)
}


// whatever you put inside the bracket is called the argument
//and it is automatically available within the function declaration
//greet("luffy"); */