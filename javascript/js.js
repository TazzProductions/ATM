var pin = parseInt(document.getElementById('pinNumber').value);
var pinarray = ["8090"];
var output = document.getElementById("output");
var output2 = document.getElementById("output2");
// var amount = document.getElementById("amount").value;
var choice = document.querySelectorAll('input[type="radio"]:checked');
var choice1 = document.getElementsByName('choice1').value;
var choice2 = document.getElementsByName('choice2').value;
var choice3 = document.getElementsByName('choice3').value;
var completeW = document.getElementById("complereW")


var user = { 
    pincode:8090,
    checking:2200,
    savings:400,
    balance:2200,
};
function valid(){
    if (pin != user.pincode || pin == 8090) {
        // event.preventDefault();
        output.innerHTML = '<button><a href="Screen3.html">Continue</a></button>'

    }else{
        alert("error")
    }
};
function ShowAmount(){
    // event.preventDefault();
    if(choice.checked == choice1){
        user.balance = user.balance - 100;
        output.innerHTML = '<h1>Dispensing<br> Cash<br> Bellow </h1><br>' + '<button type="submit" onclick="setTimeout(CollectedCash, 3000);">Collect Cash</button>';    };
        // output2.innerHTML = user.balance;
    if(choice.checked == choice2){
        user.balance = user.balance - 120;
        // output2.innerHTML = user.balance;
        output.innerHTML = '<h1>Dispensing<br> Cash<br> Bellow </h1><br>' + '<button type="submit" onclick="setTimeout(CollectedCash, 3000);">Collect Cash</button>';    };
    if(choice.checked == choice3){
        user.balance = user.balance - 140;
        // output2.innerHTML = user.balance;
        output.innerHTML = '<h1>Dispensing<br> Cash<br> Bellow </h1><br>' + '<button type="submit" onclick="setTimeout(CollectedCash, 3000);">Collect Cash</button>';
    };
};
function CollectedCash(){
    output.innerHTML = "<h2>Your Current<br> Amount is<br>" + user.balance + "<br><button><a href='WdAmountComplete.html'>Next</a></button>";

};
// "<h2>Your Current Amount is</h2><div id='output2'></div>"

function Amount(){
    event.preventDefault();
    output.innerHTML = "<h4>are you sure this is the<br> amount you would like to<br> withdrawl?</h4>" + '<br><button type="submit" onclick="setTimeout(ShowAmount, 3000);">Enter</button>';
    // output2.innerHTML = totalBalance;
    
};
function withdrawlLoad(){
    output = document.getElementById("output");
    event.preventDefault();
    output.innerHTML = "<h3 class='sytle-amount'>What amount would <br>you like to withdrawl?</h3>" + '<br>' + '<input type="radio" value="100" name="choice1" id="complereW" onclick="Amount();">100</input><input type="radio" value="120" name="choice2" onclick="Amount();">120</input><input type="radio" value="140" name="choice3" onclick="Amount();">140</input>'
};
// "<br><button><a href='WdAmountComplete.html'>Next</a></button>"
// + '<h1>Dispensing Cash Bellow </h1><br><h2>Your Current Amount is</h2><div id="output2"></div><br>';?