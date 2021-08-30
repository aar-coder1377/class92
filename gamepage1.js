var actual_answer = 0;
var question_turn = "Player 2";
var answer_turn = "Player 1";
var update_player1_score = 0;
var update_player2_score = 0;

function send() {
    number1 = document.getElementById("first_number_input").value;
    number2 = document.getElementById("second_number_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
   // check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check Me</button>";
    check_button = "<br><br><button  onclick='check()'>Check Me</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}
function check() {
    console.log("check");
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_answer) {
       
        update_player1_score = update_player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else {
        
            update_player2_score = update_player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_player2_score;

    }
    
    temp = document.getElementById("aturn").innerHTML;
    document.getElementById("aturn").innerHTML = document.getElementById("qturn").innerHTML;
    document.getElementById("qturn").innerHTML = temp;
   
        
       
    }



   



