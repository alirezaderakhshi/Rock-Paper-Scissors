
var player_choice="";
var player_score=0;
var computer_score=0;

var computerTurn = function(){
    let random_number = Math.random();
    if(random_number<0.33){
        return "rock";
    }
    else if(random_number>0.33 && random_number<0.67){
        return "paper";
    }
    else{
        return "scissors";
    }
} 


var gameResult = function(cTurn,pTurn){
    if(cTurn=="rock" && pTurn=="rock"){
        return "Tie!!!";
    }
    else if(cTurn=="rock" && pTurn=="paper"){
        player_score+=1;
        return "You Win!";
    }
    else if(cTurn=="rock" && pTurn=="scissors"){
        computer_score+=1;
        return "Opponent Wins!";
    }
    else if(cTurn=="paper" && pTurn=="rock"){
        computer_score+=1;
        return "Opponent Wins!";
    }
    else if(cTurn=="paper" && pTurn=="paper"){
        return "Tie!!!";
    }
    else if(cTurn=="paper" && pTurn=="scissors"){
        player_score+=1;
        return "You Win!";
    }
    else if(cTurn=="scissors" && pTurn=="rock"){
        player_score+=1;
        return "You Win!";
    }
    else if(cTurn=="scissors" && pTurn=="paper"){
        computer_score+=1;
        return "Opponent Wins!";
    }
    else if(cTurn=="scissors" && pTurn=="scissors"){
        return "Tie!!!";
    }
    else{
        return "OOPS! Something Going Wrong... Play Again"
    }
}

var reload = function(){
    window.location.reload();
    return false;
}

function start(){
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
    document.getElementById('icons').style.visibility = "visible";
    document.getElementById('start_button').style.visibility = "hidden";
    document.getElementById('reset_button').style.visibility = "visible";

    }


function showImages(c_choice,p_choice){
    if(c_choice=="rock"){
        document.getElementById('computer_img').src="rock.png";
    }
    else if(c_choice=="paper"){
        document.getElementById('computer_img').src="paper.png";
    }
    else if(c_choice=="scissors"){
        document.getElementById('computer_img').src="scissors.png";
    }

    if(p_choice=="rock"){
        document.getElementById('user_img').src="rock.png";
    }
    else if(p_choice=="paper"){
        document.getElementById('user_img').src="paper.png";
    }
    else if(p_choice=="scissors"){
        document.getElementById('user_img').src="scissors.png";
    }
}


function play(choice){
    //document.getElementById('reset').disabled = false;
    if(choice == "rock"){
        player_choice = "rock";
    }
    if(choice == "paper"){
        player_choice = "paper";
    }
    if(choice == "scissors"){
        player_choice = "scissors";
    }
    var computer_choice = computerTurn();
    //console.log(player_choice);
    //console.log(computer_choice);
    if(player_choice == "rock" || player_choice == "paper" || player_choice == "scissors"){
        showImages(computer_choice,player_choice);
        document.getElementById('message').innerHTML = gameResult(computer_choice,player_choice);
        document.getElementById('scores').innerHTML = " " + computer_score + "-" + player_score;
    }
    player_choice = "";
}