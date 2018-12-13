var users = {
    user001: {
        ID: 'Tazz',
        pin: 1234,
        RT: [],
        balance: 2000,
        card: {
            code: 1234123412341234,
            date: "01/2020",
            cvv: 123,
            zip: 39213,
        },
        Caccount: {
            balance: 2000,
        },
        Saccount: {
            balance: 1000,
        },
        
        
    },
    
    user002: {
        ID: "John",
        pin: 4321,
        RT: [],
        card: {
            code: 4321432143214321,
            date: "10/2020",
            cvv: 321,
            zip: 39213,
        },
        Caccount: {
            balance: 200,
        },
        Saccount: {
            balance: 100,
        },
        
        
    },
};
function valid(){
    var userID = document.getElementById("userID").value;
    if (userID === users.user001.ID){
        event.preventDefault();

        var x = document.getElementById("x");
        var form_ = document.getElementsByTagName("form");

        x.innerHTML = '<input type="number" id="userPin" class="atm-1" placeholder="Enter Pin">' + '<input type="submit" class="atm-2">'

        form_[0].onsubmit = function uservalid(){
            var userPin = document.getElementById("userPin").value;

            if (userPin == users.user001.pin){
                var y = document.getElementById("y");

                event.preventDefault();

                y.innerHTML = '<a href="atm(2).html" class="button-3"><button>Login</button></a>'
            } else {
                alert("not working")
                }
            };
    } else {
        alert("dosent work")
    }
}


/////////////////------Withdrawl-----//////////////////
function withdrawlLoad(){
    event.preventDefault();
    output.innerHTML = "<h3>What amount would <br>you like to withdrawl?</h3>" + '<br>' + '<input type="radio" value="100" name="choice1" id="complereW" onclick="Amount();">100</input><input type="radio" value="120" name="choice2" onclick="Amount();">120</input><input type="radio" value="140" name="choice3" onclick="Amount();">140</input>'
};
function Amount(){
    // event.preventDefault();
    output2 = document.getElementById("output2")
    output.innerHTML = "<h3>are you sure this is the<br> amount you would like to<br> withdrawl?</h3>" + '<br><button type="submit" class="sure" onclick="setTimeout(ShowAmount, 3000);">Enter</button>';
    // output2.innerHTML = totalBalance;
    
};

function ShowAmount(){
    // event.preventDefault();
    var choice = document.querySelectorAll('input[type="radio"]:checked');
var choice1 = document.getElementsByName('choice1').value;
var choice2 = document.getElementsByName('choice2').value;
var choice3 = document.getElementsByName('choice3').value;
    if(choice1 = choice.checked){
        users.user001.balance =  users.user001.balance - 100;
        output.innerHTML = '<h3>Dispensing<br> Cash Bellow </h3><br>' + '<button type="submit" class="collect-cash" onclick="setTimeout(CollectedCash, 3000);">Collect<br> Cash</button>';    };
        // output2.innerHTML = user.balance;
    if(choice2 = choice.checked){
        users.user001.balance =  users.user001.balance - 120;
        // output2.innerHTML = user.balance;
        output.innerHTML = '<h3>Dispensing Cash Bellow </h3><br>' + '<button type="submit" class="collect-cash" onclick="setTimeout(CollectedCash, 3000);">Collect<br> Cash</button>';    };
    if(choice3 = choice.checked){
        users.user001.balance =  users.user001.balance - 140;
        // output2.innerHTML = user.balance;
        output.innerHTML = '<h3>Dispensing Cash Bellow </h3><br>' + '<button type="submit" class="collect-cash" onclick="setTimeout(CollectedCash, 3000);">Collect<br> Cash</button>';
    };
};

function CollectedCash(){
    // event.preventDefault();
    output.innerHTML = "<h3>Your Current Amount is<br>" + '<strong>$' + users.user001.balance + "<br><button class='colected-cash'><a href='WdAmountComplete.html'>Next</a></button>" +'</strong>';

};
/////////////////------Withdrawl-----//////////////////

/////////////////------Balance-----//////////////////
function balance(){
    output.innerHTML ="<strong>$" + users.user001.balance + "</strong>"
    
};
/////////////////------Balance-----//////////////////
/////////////////------Transfer-----//////////////////
function transfer(){

}
/////////////////------Transfer-----//////////////////
function clearPassword() {
    clickedButton(nonChar ="")  
   }
  function deleteChar(){
      clickedButton(nonChar = nonChar.substring(0,nonChar.length-1))
  }      



